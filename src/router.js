import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/home/HomePage.vue';
import BuyHome from './pages/buy/BuyHome.vue';
import BuyDetails from './pages/buy/BuyDetails.vue';
import RentHome from './pages/rent/RentHome.vue';
import RentDetails from './pages/rent/RentDetails.vue';
import SellHome from './pages/sell/SellHome.vue';
import AboutMe from './pages/about/AboutMe.vue';
import FrequentlyAsked from './pages/FAQ/FrequentlyAsked.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/buy', component: BuyHome },
    { path: '/buy/:id', component: BuyDetails, props: true },
    { path: '/rent', component: RentHome },
    { path: '/rent/:id', component: RentDetails, props: true },
    { path: '/sell', component: SellHome },
    { path: '/about', component: AboutMe },
    { path: '/faq', component: FrequentlyAsked },
  ],

  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      if (to.hash === '#contact') {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }
      if (
        ['#home', '#buy', '#rent', '#sell', '#about', '#faq'].includes(to.hash)
      ) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ top: 0, behavior: 'smooth' });
          }, 500);
        });
      }
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ el: to.hash, top: 100, behavior: 'smooth' });
        }, 500);
      });
    } else {
      return { top: 0, left: 0 };
    }
  },
});

export default router;
