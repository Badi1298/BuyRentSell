<template>
  <the-nav></the-nav>
  <router-view v-slot="slotProps" v-if="!menuIsVisible">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <footer>
    <the-footer v-if="!menuIsVisible"></the-footer>
  </footer>
</template>

<script>
import TheNav from './components/layout/TheNav.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: { TheNav, TheFooter },

  computed: {
    menuIsVisible() {
      return this.$store.getters['menuIsVisible'];
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: #fdfdfd;
  overflow-x: hidden;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

.orange {
  color: #ff6502;
}

.red {
  color: #9c2b2b;
}

.blue {
  color: #0b5394;
}
</style>
