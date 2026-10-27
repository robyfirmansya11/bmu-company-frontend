const base = process.env.BMU_PREVIEW_URL || "http://127.0.0.1:3000";
const assert = require("node:assert/strict");
(async () => {
  let checked = 0;
  for (const locale of ["id", "en", "zh"]) {
    for (const route of ["", "/about", "/contact", "/careers", "/portfolio", "/eksplorasi", "/operasi", "/prospek", "/kesimpulan", "/blog", "/error"]) {
      const url = base + "/" + locale + route;
      const response = await fetch(url);
      const html = await response.text();
      assert.equal(response.status, 200, url);
      assert.equal(response.headers.get("x-content-type-options"), "nosniff");
      assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN");
      assert.match(html, new RegExp('<html[^>]*lang="' + locale + '"'), url);
      assert.doesNotMatch(html, /MISSING_MESSAGE|INVALID_MESSAGE|FORMATTING_ERROR/, url);
      assert.doesNotMatch(html, /href="[^" ]*\/izin(?:["?#])/i, url + " must not link to the removed licenses page");
      checked++;
    }
  }
  const response = await fetch(base + "/", {redirect: "manual", headers: {"accept-language": "id"}});
  assert.equal(response.status, 307);
  assert.ok(response.headers.get("location").endsWith("/id"));
  for (const route of ["/signin", "/signup", "/id/izin", "/en/izin", "/zh/izin"]) {
    assert.equal((await fetch(base + route)).status, 404, route);
  }
  console.log(checked + " localized routes passed; root redirects to /id.");
})().catch(error => { console.error(error); process.exitCode = 1; });
