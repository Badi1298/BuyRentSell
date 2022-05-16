<template>
  <div class="search-container">
    <transition name="search" mode="out-in">
      <div v-if="!activeSearch" class="no-search">
        <h1>Frequently asked questions</h1>
        <i @click="toggleActive" class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div v-else class="search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          v-if="activeSearch"
          type="text"
          placeholder="Looking for something?"
          v-model="searchQuery"
          @input="setQuery"
          @keydown.esc="toggleActive"
        />
        <i @click="toggleActive" class="fa-solid fa-xmark"></i>
      </div>
    </transition>
  </div>
  <p v-if="searchQuery">Showing results for: {{ searchQuery }}</p>
</template>

<script>
export default {
  data() {
    return {
      activeSearch: false,
      searchQuery: '',
    };
  },

  methods: {
    toggleActive() {
      this.activeSearch = !this.activeSearch;
      this.searchQuery = '';
      this.$store.dispatch('setQuery', '');
    },

    setQuery() {
      this.$store.dispatch('setQuery', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-container {
  position: relative;
  margin-top: 3rem;
}

h1 {
  position: absolute;
  font-size: 1.5rem !important;
  font-weight: 400;
  left: 27%;
}

p {
  margin-top: 2rem;
}

.search-container i {
  position: absolute;
  top: 32%;
  right: 0%;
  cursor: pointer;
}

.no-search {
  height: 40px;
}

.search-box {
  width: 100%;
  height: 40px;
  position: relative;
}

.search-box i {
  right: 1%;
}

.search-box .fa-magnifying-glass {
  width: 16px;
  height: 16px;
  left: 1%;
  top: 29%;
}

.search-box input {
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 400;
}

.search-enter-from,
.search-leave-to {
  opacity: 0;
  transform: scale(0);
}

.search-enter-active,
.search-leave-active {
  transition: all 0.3s ease-in-out;
}

.search-enter-to,
.search-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
