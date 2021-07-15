import { createApp } from "vue";

import {
  applyPolyfills,
  defineCustomElements,
} from "@plug-checkout/core/loader";

import App from "./App.vue";

const app = createApp(App);

applyPolyfills().then(() => {
  defineCustomElements().then(() => {
    app.mount("#app");
  });
});
