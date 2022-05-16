<template>
  <div class="container">
    <h1>FAQ</h1>
    <faq-search></faq-search>
    <faq-item
      v-for="qaa in qa"
      :key="qaa.question"
      :question="qaa.question"
      :answer="qaa.answer"
    ></faq-item>
  </div>
</template>

<script>
import FaqItem from '../../components/faq/FaqItem.vue';
import FaqSearch from '../../components/faq/FaqSearch.vue';

export default {
  components: { FaqItem, FaqSearch },

  computed: {
    qa() {
      return this.$store.getters['qa'];
    },
  },
};
</script>

<style scoped>
.container {
  width: 660px;
  position: relative;
  left: 22%;
  margin-top: 3rem;
}

.container h1 {
  font-size: 4rem;
}
</style>
