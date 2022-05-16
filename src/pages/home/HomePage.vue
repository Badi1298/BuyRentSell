<template>
  <div id="home">
    <section>
      <div class="main">
        <div class="listings">
          <h2 @click="scrollToFeatured">View My Listings +</h2>
        </div>
        <div class="image">
          <img :src="featuredPhoto" />
          <h1>
            Your Future Home<br />
            Is Right Here
          </h1>
        </div>
      </div>

      <h3 id="featured">Featured Properties</h3>
      <featured-properties></featured-properties>

      <div class="whywork">
        <h3>Why Work With Me?</h3>
        <why-work></why-work>
      </div>

      <h3 class="testimonials" id="testimonial">What My Clients Say</h3>
      <testimonials-slides></testimonials-slides>
    </section>
  </div>
</template>

<script>
import FeaturedProperties from '../../components/featured/FeaturedProperties.vue';
import WhyWork from '../../components/home/WhyWork.vue';
import TestimonialsSlides from '../../components/home/TestimonialSlides.vue';

export default {
  components: { FeaturedProperties, WhyWork, TestimonialsSlides },

  computed: {
    featuredPhoto() {
      return this.$store.getters['featuredPhoto'];
    },

    menuIsVisible() {
      return this.$store.getters['menuIsVisible'];
    },
  },

  methods: {
    scrollToFeatured() {
      const el = document.getElementById('featured');

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;700&display=swap');

/* Main */
section {
  font-family: 'Roboto', sans-serif;
}

h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin: 6rem 0 1rem 0;
}

h1 {
  position: absolute;
  left: 90px;
  top: 90px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 5rem;
  color: #000;
}

.main {
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 4fr;
  gap: 10rem;
}

.image {
  position: relative;
  width: 100%;
}

.listings h2 {
  position: absolute;
  transform-origin: left top;
  top: 70%;
  left: 0;
  background: #2986cc;
  padding: 1.5rem 2.5rem;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  transform: rotate(270deg);
  cursor: pointer;
}

/* Why Work With Me */
.whywork {
  border-top: 1px solid #999;
  margin-top: 1.5rem;
}

.whywork h3 {
  margin: 2rem;
  font-weight: 400;
}

h3.testimonials {
  margin-top: 9rem;
  font-weight: 400;
}

@media (max-width: 1100px) {
  .main {
    display: flex;
    position: relative;
    gap: 0rem;
  }

  .listings h2 {
    display: none;
  }
}
</style>
