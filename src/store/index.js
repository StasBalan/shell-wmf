import Vue from "vue";
import Vuex from "vuex";
import CountModule from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countModule: CountModule
  },
});
