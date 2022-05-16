<template>
  <h3>Tel: {{ personalInfo.tel }}</h3>
  <h3>Email: {{ personalInfo.email }}</h3>
  <h3>Address: {{ personalInfo.address }}</h3>
  <h3>{{ personalInfo.city }}</h3>
  <div class="link-icons">
    <a href="https://facebook.com" target="_blank"
      ><i class="fa-brands fa-facebook-f"></i
    ></a>
    <a href="https://linkedin.com" target="_blank"
      ><i class="fa-brands fa-linkedin-in"></i
    ></a>
    <a href="https://youtube.com" target="_blank"
      ><i class="fa-brands fa-youtube"></i
    ></a>
    <a href="https://twitter.com" target="_blank"
      ><i class="fa-brands fa-twitter"></i
    ></a>
  </div>
</template>

<script>
export default {
  computed: {
    personalInfo() {
      return this.$store.getters['personalInfo'];
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

a {
  color: #fff;
}

.link-icons {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}
</style>
