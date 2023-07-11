import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        collection: resolve(__dirname, "collection.html"),
        product: resolve(__dirname, "product.html"),
        bag: resolve(__dirname, "bag.html"),
        account: resolve(__dirname, "account.html"),
        success: resolve(__dirname, "success.html"),
        createAccount: resolve(__dirname, "createAccount.html"),
        forgetPassword: resolve(__dirname, "forgetPassword.html"),
      },
    },
  },
});
