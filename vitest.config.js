// false positive on import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import { defineConfig, defaultExclude } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    // Exclude packages that have their own vitest configs
    exclude: [
      ...defaultExclude,
      "packages/renderer/tests/**",
      "packages/image/tests/**",
    ],
    isolate: false,
  },
});
