<template>
  <div class="container">
    <div class="slideshow">
      <div
        class="slides"
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.number"
        :style="`transform: translateX(${100 * (index - currentSlide)}%) `"
      >
        <q>{{ testimonial.quote }}</q>
        <p>{{ testimonial.author }}</p>
      </div>
    </div>
    <button class="next" @click="nextSlide">
      <i class="fa-solid fa-arrow-right fa-3x"></i>
    </button>
    <button class="prev" @click="prevSlide">
      <i class="fa-solid fa-arrow-left fa-3x"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
    };
  },

  computed: {
    testimonials() {
      return this.$store.getters['testimonials'];
    },
  },

  methods: {
    nextSlide() {
      if (this.currentSlide === this.testimonials.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },

    prevSlide() {
      if (this.currentSlide === 0) {
        this.currentSlide = this.testimonials.length - 1;
      } else {
        this.currentSlide--;
      }
    },
  },
};
</script>

<style scoped>
q {
  font-size: 3.5rem;
}

p {
  position: inherit;
  bottom: 0;
  font-size: 1.2rem;
  font-weight: 300;
}

.container {
  max-width: 70rem;
  margin: 0 auto;
  position: relative;
}

.slideshow {
  max-width: 45rem;
  height: 25rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slides {
  position: absolute;
  top: -10%;
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.3, 1);
}

.next,
.prev {
  display: inline-block;
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
}

.next {
  top: 30%;
  right: 5%;
}

.prev {
  top: 30%;
  left: 5%;
}

.next:hover,
.prev:hover {
  opacity: 0.7;
}
</style>
