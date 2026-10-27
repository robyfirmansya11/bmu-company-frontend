const assert = require("node:assert/strict");
const base = process.env.BMU_PREVIEW_URL || "http://127.0.0.1:3003";
async function get(path) {
  const response = await fetch(base + path, {headers: {"User-Agent": "Googlebot"}, signal: AbortSignal.timeout(60000)});
  assert.equal(response.status, 200, path);
  return response.text();
}
(async () => {
  for (const locale of ["id", "en", "zh"]) {
    const html = await get("/" + locale);
    assert.match(html, /<title>PT Bumi Morowali Utama \(PT BMU\)/);
    assert.ok(html.includes('rel="canonical" href="https://bumimorowaliutama.com/' + locale + '"'));
    for (const lang of ["id", "en", "zh-Hans", "x-default"]) assert.ok(html.includes('hrefLang="' + lang + '"'), lang);
    const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(schema);
    const data = JSON.parse(schema[1]);
    assert.equal(data["@graph"][0].name, "PT Bumi Morowali Utama");
    assert.ok(data["@graph"][0].alternateName.includes("PT BMU"));
    assert.ok(!html.includes('content="noindex'));
  }
  const sitemap = await get("/sitemap.xml");
  assert.equal((sitemap.match(/<loc>/g) || []).length, 30);
  assert.ok(!sitemap.includes("/izin"));
  assert.ok(sitemap.includes('hreflang="zh-Hans"'));
  const robots = await get("/robots.txt");
  assert.ok(robots.includes("Sitemap: https://bumimorowaliutama.com/sitemap.xml"));
  assert.ok(!robots.includes("Disallow: /\n"));
  const about = await get("/id/about");
  assert.ok(about.includes('rel="canonical" href="https://bumimorowaliutama.com/id/about"'));
  console.log("SEO smoke passed: 3 homepages, schema, canonical, hreflang, 30 sitemap URLs, robots, about.");
})().catch(error => {console.error(error); process.exitCode = 1;});
