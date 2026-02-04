/* eslint-disable import/extensions */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

import trimReconciler from "./build/trim-reconciler.js";

export default [
  {
    input: "src/index.js",
    output: { format: "es", file: "lib/index.js" },
    external: ["./reconciler-23.js", "./reconciler-31.js"],
  },
  {
    input: "src/reconciler-23.js",
    output: {
      format: "es",
      file: "lib/reconciler-23.js",
    },
    plugins: [
      resolve({ resolveOnly: ["react-reconciler-23"] }),
      commonjs({ esmExternals: (id) => id === "scheduler" }),
      trimReconciler(),
      terser({
        compress: { dead_code: true },
        // Reserve single letters used as labels in the minified react-reconciler
        // to prevent vitest's SSR transform from incorrectly modifying them
        mangle: {
          reserved: [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
          ],
        },
      }),
    ],
    external: ["react"],
  },
  {
    input: "src/reconciler-31.js",
    output: {
      format: "es",
      file: "lib/reconciler-31.js",
    },
    plugins: [
      resolve({ resolveOnly: ["react-reconciler-31"] }),
      commonjs({ esmExternals: (id) => id === "scheduler" }),
      trimReconciler(),
      terser({
        compress: { dead_code: true },
        // Reserve single letters used as labels in the minified react-reconciler
        // to prevent vitest's SSR transform from incorrectly modifying them
        mangle: {
          reserved: [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
          ],
        },
      }),
    ],
    external: ["react"],
  },
];
