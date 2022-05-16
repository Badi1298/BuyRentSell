import { createStore } from 'vuex';
import personalModule from './modules/personal/index.js';
import featuredModule from './modules/featured/index.js';
import testimonialsModule from './modules/testimonials/index.js';
import buyModule from './modules/buy/index.js';
import rentModule from './modules/rent/index.js';
import faqModule from './modules/faq/index.js';

export default createStore({
  modules: {
    personalInfo: personalModule,
    featuredProperties: featuredModule,
    testimonials: testimonialsModule,
    buyProperties: buyModule,
    rentApartments: rentModule,
    faq: faqModule,
  },

  state() {
    return {
      menuIsVisible: false,
    };
  },

  getters: {
    menuIsVisible(state) {
      return state.menuIsVisible;
    },
  },

  mutations: {
    showMenu(state) {
      state.menuIsVisible = true;
    },

    hideMenu(state) {
      state.menuIsVisible = false;
    },
  },

  actions: {
    showMenu(context) {
      context.commit('showMenu');
    },

    hideMenu(context) {
      context.commit('hideMenu');
    },
  },
});
