import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueYoutube from 'vue-youtube';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.use(VueYoutube)

new Vue({
  render: h => h(App)
}).$mount("#app");
