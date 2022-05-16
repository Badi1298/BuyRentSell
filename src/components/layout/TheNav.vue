<template>
  <nav>
    <div class="nav-container" v-if="!menuIsVisible">
      <div class="menu">
        <i class="fa-solid fa-bars fa-3x" @click="showMenu"></i>
      </div>
      <div class="list-container">
        <div class="list">
          <ul>
            <li class="buy">
              <p>I want to</p>
              <h2 class="red"><router-link to="/buy">Buy +</router-link></h2>
            </li>
            <li class="rent">
              <p>I want to</p>
              <h2 class="blue"><router-link to="/rent">Rent +</router-link></h2>
            </li>
            <li class="sell">
              <p>I want to</p>
              <h2 class="orange">
                <router-link to="/sell">Sell +</router-link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-container">
        <div class="info">
          <router-link to="/home">
            <h2>
              Serban David /
              <h3>Real Estate Agent</h3>
            </h2>
          </router-link>
          <p>Tel: 1234-567-890</p>
        </div>
      </div>
    </div>
  </nav>
  <transition name="menut" mode="out-in">
    <the-menu v-if="menuIsVisible"></the-menu>
  </transition>
</template>

<script>
import TheMenu from './TheMenu.vue';

export default {
  components: { TheMenu },

  computed: {
    menuIsVisible() {
      return this.$store.getters['menuIsVisible'];
    },
  },

  methods: {
    showMenu() {
      this.$store.dispatch('showMenu');
    },
  },
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #999;
}

.nav-container {
  display: flex;
  position: relative;
  align-items: center;
  margin: 2rem;
}

.list-container {
  position: absolute;
  left: 21%;
}

.info-container {
  position: absolute;
  right: 0%;
  top: -14%;
}

ul {
  display: flex;
  flex-direction: row;
  text-align: center;
  list-style-type: none;
  width: 100%;
}

ul li:nth-child(1),
ul li:nth-child(2) {
  border-right: 1px solid #777;
}

ul li a {
  padding: 0 1.5rem;
  text-decoration: none;
}

a {
  color: #333;
}

a i {
  cursor: pointer;
}

.buy h2,
.sell h2,
.rent h2 {
  font-weight: 500;
}

.buy h2 a {
  color: #9c2b2b;
}

.rent h2 a {
  color: #0b5394;
}

.sell h2 a {
  color: #ff6502;
}

.menu i {
  cursor: pointer;
}

.info-container .info a {
  text-decoration: none;
}

.info-container .info h2 {
  display: inline;
  font-weight: 400;
}

.info-container .info h3 {
  display: inline;
  font-size: 1.5rem;
  font-weight: 100;
}

.menut-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.menut-enter-active {
  transition: all 0.5s ease-in;
}

.menut-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 970px) {
  .info-container {
    display: none;
  }

  .list-container {
    top: 50%;
    left: 25%;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    height: 100px;
  }

  .menu {
    position: absolute;
    top: 0%;
  }
}
</style>
