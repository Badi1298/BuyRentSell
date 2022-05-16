<template>
  <footer class="outer-container">
    <div class="container">
      <div class="contact" id="contact">
        <h2><i class="fa-solid fa-circle orange"></i>Leave Me a Message</h2>
        <footer-form></footer-form>
      </div>
      <div class="info">
        <h2><i class="fa-solid fa-circle red"></i> Email / Call Me</h2>
        <footer-info></footer-info>
      </div>
      <div class="links">
        <h2><i class="fa-solid fa-circle blue"></i> Quick Links</h2>
        <footer-links></footer-links>
      </div>
      <p>&copy; 2022 by Serban David. All right reserved.</p>
    </div>
  </footer>
</template>

<script>
import FooterForm from '../footer/FooterForm.vue';
import FooterInfo from '../footer/FooterInfo.vue';
import FooterLinks from '../footer/FooterLinks.vue';

export default {
  components: { FooterForm, FooterInfo, FooterLinks },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;700&display=swap');

.outer-container {
  padding: 0 2rem;
}

h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 7rem;
  margin-bottom: 3rem;
}

p {
  margin: 5rem 0 3rem 0;
  font-size: 0.9rem;
}

.fa-circle {
  font-size: 1rem;
}

.outer-container {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: #1a1d33;
  color: #fff;
}

.container {
  display: grid;
  grid-template-columns: 2.5fr 2fr 1fr;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 4rem;
}

@media (max-width: 900px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .links {
    display: none;
  }

  .info {
    margin-bottom: 2rem;
  }
}
</style>
