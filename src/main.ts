import { createApp } from "vue";
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`
// vue Router
import router from "@/routers/index";
// pinia store
import pinia from "@/stores/index";


import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/notification.scss";
import "element-plus/theme-chalk/src/loading.scss";
import "element-plus/theme-chalk/src/image-viewer.scss";

const app = createApp(App);
// app.use(ElementPlus);
app.use(router).use(pinia).mount("#app");
