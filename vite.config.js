import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        collection: "./collection.html",
        product: "./product.html",
        bag: "./mybag.html",
      },
    },
  },
});
