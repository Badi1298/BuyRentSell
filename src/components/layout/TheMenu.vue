<template>
  <section>
    <nav>
      <i class="fa-solid fa-xmark fa-3x" @click="closeMenu"></i>
      <h2>
        Serban David /
        <h3>Real Estate</h3>
      </h2>
    </nav>
    <div class="rows">
      <ul class="menu">
        <li><h3 class="my-1">Menu</h3></li>
        <li>
          <h2 :class="{ active: currentRoute === '/home' }">
            <router-link to="/home" @click="closeMenu">Home</router-link>
          </h2>
        </li>
        <li>
          <h2
            :class="{
              active: currentRoute === '/buy' || currentRoute === `/Buy/${id}`,
            }"
          >
            <router-link to="/buy" @click="closeMenu">Buy</router-link>
          </h2>
        </li>
        <li>
          <h2
            :class="{
              active:
                currentRoute === '/rent' || currentRoute === `/Rent/${id}`,
            }"
          >
            <router-link to="/rent" @click="closeMenu">Rent</router-link>
          </h2>
        </li>
        <li>
          <h2 :class="{ active: currentRoute === '/sell' }">
            <router-link to="/sell" @click="closeMenu">Sell</router-link>
          </h2>
        </li>
        <li>
          <h2 :class="{ active: currentRoute === '/about' }">
            <router-link to="/about" @click="closeMenu">About</router-link>
          </h2>
        </li>
        <li>
          <h2 :class="{ active: currentRoute === '/faq' }">
            <router-link to="/faq" @click="closeMenu">FAQ</router-link>
          </h2>
        </li>
        <li>
          <h2>
            <router-link
              :to="{ path: `${currentRoute}`, hash: '#contact' }"
              @click="closeMenu"
              >Contact</router-link
            >
          </h2>
        </li>
      </ul>
      <ul class="social">
        <li><h3 class="my-1">Social</h3></li>
        <li>
          <h2><a>Facebook</a></h2>
        </li>
        <li>
          <h2><a>Pinterest</a></h2>
        </li>
        <li>
          <h2><a>Linkedin</a></h2>
        </li>
        <li>
          <h2><a>Twitter</a></h2>
        </li>
      </ul>
      <ul class="contact">
        <li>
          <h3 class="my-1">Contact</h3>
        </li>
        <li>
          <h2>
            <a>{{ personalInfo.email }}</a>
          </h2>
        </li>
        <li>
          <h2>{{ personalInfo.address }}</h2>
        </li>
        <li>
          <h2>{{ personalInfo.city }}</h2>
        </li>
        <li>
          <h2>
            <a>Tel: {{ personalInfo.tel }}</a>
          </h2>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    personalInfo() {
      return this.$store.getters['personalInfo'];
    },

    menuIsVisible() {
      return this.$store.getters['menuIsVisible'];
    },

    goToContact() {
      return this.$store.getters['goToContact'];
    },

    currentRoute() {
      return this.$route.path;
    },

    id() {
      const { id } = this.$route.params;
      return id;
    },
  },

  methods: {
    closeMenu() {
      this.$store.dispatch('hideMenu');
    },

    toggleGoToContact() {
      this.$store.dispatch('activateGoToContact');
      setTimeout(() => {
        this.$store.dispatch('inactivateGoToContact');
      }, 500);
    },

    contact() {
      this.closeMenu();
      this.toggleGoToContact();
    },
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  background-color: #0b5394;
  color: #fff;
}

h2 {
  font-weight: 500;
}

h3 {
  display: inline;
  font-size: 1.5rem;
  font-weight: 300;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

nav a {
  color: #fff;
}

ul {
  list-style-type: none;
  line-height: 4rem;
}

a {
  columns: #fff;
  cursor: pointer;
  text-decoration: none;
}

i {
  cursor: pointer;
}

.menu a {
  color: #fff;
}

li h2 {
  font-size: 1.4rem;
}

ul.menu li h2 {
  font-size: 1.8rem;
  font-weight: 500;
}

ul.social li h2,
ul.contact li h2 {
  font-weight: 400;
}

.rows {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin-top: 7rem;
}

.my-1 {
  margin-bottom: 1rem;
}

.active {
  opacity: 0.6;
}
</style>
