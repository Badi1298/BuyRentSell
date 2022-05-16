<template>
  <div class="quicklinks">
    <router-link
      :to="{ path: '/home', hash: '#home' }"
      :class="{ active: currentRoute === '/home' }"
      >Home</router-link
    >
    <router-link
      :to="{ path: '/buy', hash: '#buy' }"
      :class="{
        active: currentRoute === '/buy' || currentRoute === `/Buy/${id}`,
      }"
      >Buy</router-link
    >
    <router-link
      :to="{ path: '/rent', hash: '#rent' }"
      :class="{
        active: currentRoute === '/rent' || currentRoute === `/Rent/${id}`,
      }"
      >Rent</router-link
    >
    <router-link
      :to="{ path: '/sell', hash: '#sell' }"
      :class="{ active: currentRoute === '/sell' }"
      >Sell</router-link
    >
    <router-link
      :to="{ path: '/about', hash: '#about' }"
      :class="{ active: currentRoute === '/about' }"
      >About</router-link
    >
    <router-link
      :to="{ path: '/faq', hash: '#faq' }"
      :class="{ active: currentRoute === '/faq' }"
      >FAQ</router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    },

    id() {
      const { id } = this.$route.params;
      return id;
    },
  },
};
</script>

<style scoped>
a {
  color: #fff;
}

.quicklinks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quicklinks a {
  text-decoration: none;
  font-weight: 400;
}

.quicklinks a:hover {
  opacity: 0.6;
}

.active {
  opacity: 0.6;
}

@media (max-width: 900px) {
  .quicklinks {
    display: none;
  }
}
</style>
