const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const source = fs.readFileSync(
  path.join(__dirname, "../src/components/Common/ScrollUp.tsx"),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

for (const behavior of ["void", "promise", "no scrolling element"]) {
  test(`ScrollUp does not register an invalid cleanup: ${behavior}`, () => {
    const effects = [];
    const calls = [];
    const context = {
      exports: {},
      require(name) {
        assert.equal(name, "react");
        return { useEffect: (effect) => effects.push(effect) };
      },
      window: {
        document: {
          scrollingElement: behavior === "no scrolling element" ? null : {
            scrollTo(...args) {
              calls.push(args);
              return behavior === "promise" ? Promise.resolve() : undefined;
            },
          },
        },
      },
    };
    vm.runInNewContext(compiled, context);
    assert.equal(context.exports.default(), null);
    assert.equal(effects.length, 1);
    // React may set up the effect again in development Strict Mode.
    for (let attempt = 0; attempt < 2; attempt++) {
      assert.equal(effects[0](), undefined);
    }
    assert.equal(calls.length, behavior === "no scrolling element" ? 0 : 2);
    for (const args of calls) assert.deepEqual(args, [0, 0]);
  });
}
