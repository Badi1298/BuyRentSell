<template>
  <div>
    <ul class="featured">
      <featured-item
        v-for="property in featuredProperties"
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
  </div>
</template>

<script>
import FeaturedItem from './FeaturedItem.vue';

export default {
  components: { FeaturedItem },

  computed: {
    featuredProperties() {
      return this.$store.getters['featuredProperties'];
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  margin: 0 2rem;
}

ul {
  list-style-type: none;
}

.featured {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 7rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
}

@media (max-width: 1360px) {
  .featured {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
