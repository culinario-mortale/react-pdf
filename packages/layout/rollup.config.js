import babel from "@rollup/plugin-babel";

import pkg from "./package.json" with { type: "json" };

const config = {
  input: "src/index.js",
  output: { format: "es", file: "lib/index.js" },
  external: Object.keys(pkg.dependencies).concat(/@babel\/runtime/, /@culinario-mortale/),
  plugins: [
    babel({
      babelrc: true,
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
  ],
};

export default config;
