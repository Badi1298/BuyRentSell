<template>
  <div class="faq-container">
    <div class="faq">
      <div class="title" @click="toggleActive">
        <h3 class="faq-title">{{ question }}</h3>
        <button class="faq-toggle">
          <i v-if="!isActive" class="fas fa-chevron-down"></i>
          <i v-if="isActive" class="fas fa-chevron-up"></i>
        </button>
      </div>
      <transition name="text">
        <div v-if="isActive" class="content">
          <p class="faq-text">{{ answer }}</p>
          <div class="link-icons">
            <a href="https://facebook.com" target="_blank"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="https://twitter.com" target="_blank"
              ><i class="fa-brands fa-twitter"></i
            ></a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question', 'answer'],

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleActive() {
      const faq = document.querySelector('.faq');
      faq.classList.toggle('active');
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.faq-container {
  margin-top: 3rem;
  padding-bottom: 1.5rem;
  max-width: 650px;
  border-bottom: 1px solid #999;
}

.faq-title {
  font-weight: 300;
}

.faq-text {
  max-width: 600px;
  margin: 0;
  margin-top: 1.5rem;
  letter-spacing: 0.3px;
  font-family: inherit;
  font-weight: 300;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

button {
  display: inline-block;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 3px;
}

.link-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.link-icons i {
  color: #333;
}

.text-enter-from,
.text-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.text-enter-active,
.text-leave-active {
  transition: all 0.3s ease-in-out;
}

.text-enter-to,
.text-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
