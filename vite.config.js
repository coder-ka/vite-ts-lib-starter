const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`,
    },
  },
});
