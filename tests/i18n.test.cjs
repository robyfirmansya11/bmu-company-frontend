const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const {createTranslator} = require("use-intl/core");
const root = path.resolve(__dirname, "..");
const messages = Object.fromEntries(["en", "id", "zh"].map(locale => [locale, require(path.join(root, "src/messages", locale + ".json"))]));
function flatten(value, prefix = "") {
  return Object.fromEntries(Object.entries(value).flatMap(([key, item]) => {
    const fullKey = prefix ? prefix + "." + key : key;
    return typeof item === "string" ? [[fullKey, item]] : Object.entries(flatten(item, fullKey));
  }));
}
for (const locale of ["en", "id", "zh"]) {
  test(locale + " has every message and valid ICU/rich text", () => {
    const flat = flatten(messages[locale]);
    assert.deepEqual(Object.keys(flat).sort(), Object.keys(flatten(messages.en)).sort());
    const errors = [];
    const t = createTranslator({locale, messages: messages[locale], onError: error => errors.push(error.message)});
    for (const [key, value] of Object.entries(flat)) {
      assert.ok(value.trim(), key + " must not be empty");
      const rendered = t.rich(key, {current: 1, total: 3, number: 2, author: "BMU", b: c => c, strong: c => c, em: c => c, br: () => "\n"});
      assert.ok(rendered, key);
    }
    assert.deepEqual(errors, []);
  });
}
test("switching language preserves deep paths, query strings and hashes without double slashes", () => {
  const compiled = ts.transpileModule(fs.readFileSync(path.join(root, "src/lib/locales.ts"), "utf8"), {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText;
  const exports = {};
  new Function("exports", compiled)(exports);
  for (const source of exports.locales) for (const target of exports.locales) {
    assert.equal(exports.localizedPath("/" + source, target), "/" + target);
    assert.equal(exports.localizedPath("/" + source + "/careers/engineer?ref=home#apply", target), "/" + target + "/careers/engineer?ref=home#apply");
    assert.equal(exports.localizedPath("/" + source + "/", target), "/" + target);
  }
  assert.equal(exports.localizedPath("/", "id"), "/id");
  assert.equal(exports.localizedPath("/about", "zh"), "/zh/about");
  assert.equal(exports.isLocale("fr"), false);
  assert.equal(exports.isLocale("../../package"), false);
});
test("all static translation calls reference existing keys", () => {
  function walk(dir) {
    return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
  }
  for (const file of walk(path.join(root, "src")).filter(f => /\.tsx$/.test(f))) {
    const source = fs.readFileSync(file, "utf8");
    const namespace = source.match(/const t = (?:useTranslations\("([^"\n]+)"\)|await getPageTranslations\((?:params|\(await params\)).locale, "([^"\n]+)"\))/);
    if (!namespace) continue;
    const name = namespace[1] || namespace[2];
    for (const match of source.matchAll(/\bt(?:\.rich)?\("([^"\n]+)"/g)) {
      for (const locale of ["en", "id", "zh"]) assert.equal(typeof messages[locale][name]?.[match[1]], "string", file + ": " + name + "." + match[1]);
    }
  }
});
