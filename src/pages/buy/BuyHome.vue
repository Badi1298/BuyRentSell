<template>
  <section>
    <div class="head">
      <h1>
        Buy Your Next<br />
        Property
      </h1>
    </div>
    <ul class="buy">
      <featured-item
        v-for="property in buyProperties"
        :key="property.projectName"
        :id="property.id"
        :image="property.image"
        :name="property.projectName"
        :address="property.address"
        :sqft="property.sqft"
        :floor="property.floor"
        :total-rooms="property.totalRooms"
        :price="property.price"
        :type="property.type"
      ></featured-item>
    </ul>
  </section>
</template>

<script>
import FeaturedItem from '../../components/featured/FeaturedItem.vue';

export default {
  components: { FeaturedItem },

  computed: {
    buyProperties() {
      return this.$store.getters['buyProperties'];
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
}

ul {
  list-style-type: none;
}

.head {
  position: relative;
  height: 12rem;
  margin: 3rem 0 auto 0;
}

h1 {
  position: absolute;
  left: 22%;
  font-size: 4rem;
  font-weight: 700;
}

.buy {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 7rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
}

@media (max-width: 1360px) {
  .buy {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 670px) {
  .head {
    margin-bottom: 4rem;
  }
}
</style>
