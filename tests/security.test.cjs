const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const compiled = ts.transpileModule(fs.readFileSync(path.join(__dirname, "../src/lib/sanitizeArticle.ts"), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const context = { exports: {}, require };
vm.runInNewContext(compiled, context);
const { sanitizeArticle } = context.exports;

test("article HTML removes executable markup and unsafe links", () => {
  const result = sanitizeArticle('<script>alert(1)</script><p onclick="alert(1)">News</p><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">Link</a><iframe src="https://evil.example"></iframe><svg onload="alert(1)"></svg><form action="https://evil.example"><input name="password"></form>');
  assert.doesNotMatch(result, /script|onclick|onerror|javascript:|iframe|svg|form|input/);
  assert.match(result, /<p>News<\/p>/);
});
test("article HTML rejects encoded schemes, styles and protocol-relative images", () => {
  const result = sanitizeArticle('<a href="java&#x73;cript:alert(1)">Bad</a><img src="data:image/svg+xml,bad"><img src="//evil.example/a.png"><p style="position:fixed">Text</p>');
  assert.doesNotMatch(result, /href=|src=|style=|evil/);
});
test("legitimate article formatting survives sanitization", () => {
  const result = sanitizeArticle('<h2>News</h2><p><strong>BMU</strong> <a href="https://example.com">More</a></p><img src="/images/news.png" alt="News" /><table><tbody><tr><td colspan="2">Value</td></tr></tbody></table>');
  assert.match(result, /<h2>News<\/h2>/);
  assert.match(result, /href="https:\/\/example.com"/);
  assert.match(result, /src="\/images\/news.png"/);
  assert.match(result, /colspan="2"/);
  assert.equal(sanitizeArticle(null), "");
});
test("security headers restrict framing and content sniffing", async () => {
  const config = require("../next.config.js");
  const headers = Object.fromEntries((await config.headers())[0].headers.map(({key,value}) => [key,value]));
  assert.equal(config.poweredByHeader, false);
  assert.equal(headers["X-Content-Type-Options"], "nosniff");
  assert.equal(headers["X-Frame-Options"], "SAMEORIGIN");
  assert.match(headers["Content-Security-Policy"], /frame-ancestors 'self'/);
});
