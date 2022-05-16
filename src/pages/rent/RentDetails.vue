<template>
  <transition name="buy" :key="id" mode="out-in">
    <section>
      <div class="prev_next">
        <router-link class="prev" v-if="Number(id) > 0" :to="prev"
          ><i class="fa-solid fa-arrow-left"></i> Previous</router-link
        >
        <router-link
          class="next"
          v-if="id < Object.keys(rentApartments).length - 1"
          :to="next"
          >Next <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
      <div class="home_container">
        <div class="info_container">
          <h1>{{ rentApartments[id].projectName }}</h1>
          <h3>{{ rentApartments[id].address }}</h3>
          <div class="info">
            <div class="under">
              <p>Price</p>
              <h5>{{ rentApartments[id].price }}</h5>
            </div>
            <div class="under">
              <p>Neighborhood</p>
              <h5>{{ rentApartments[id].neighborhood }}</h5>
            </div>
            <div class="under">
              <p>Sqft</p>
              <h5>{{ rentApartments[id].sqft }}</h5>
            </div>
            <div class="under">
              <p>Floor</p>
              <h5>{{ rentApartments[id].floor }}</h5>
            </div>
            <div class="under">
              <p>Total Rooms</p>
              <h5>{{ rentApartments[id].totalRooms }}</h5>
            </div>
          </div>
        </div>
        <img :src="rentApartments[id].bigImage" />
        <div class="about">
          <p>About the property</p>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            explicabo minus impedit sunt architecto velit, facilis adipisci
            mollitia. Voluptate vitae consectetur ratione quas voluptates quia
            dolores deserunt odio reiciendis! Minus?
          </h3>
          <div class="icons">
            <div
              class="icon"
              v-for="amenity in rentApartments[id].amenitiesInfo"
              :key="amenity.amenity"
            >
              <img :src="amenity.icon" :alt="amenity.amenity" />
              <p>{{ amenity.amenity }}</p>
            </div>
          </div>
        </div>
        <div class="about">
          <p>Building Info</p>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id alias
            et nihil laboriosam sequi ad suscipit cupiditate asperiores
            recusandae pariatur! Tempore sapiente officiis magnam, doloremque
            quos optio amet blanditiis odit!
          </h3>
        </div>
        <interested-form></interested-form>
      </div>
      <div class="prev_next down">
        <router-link class="prev" v-if="Number(id) > 0" :to="prev"
          ><i class="fa-solid fa-arrow-left"></i> Previous</router-link
        >
        <router-link
          class="next"
          v-if="id < Object.keys(rentApartments).length - 1"
          :to="next"
          >Next <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </section>
  </transition>
</template>

<script>
import InterestedForm from '../../components/UI/InterestedForm.vue';

export default {
  props: ['id'],

  components: { InterestedForm },

  computed: {
    rentApartments() {
      return this.$store.getters['rentApartments'];
    },

    next() {
      return this.id < Object.keys(this.rentApartments).length - 1
        ? `/Rent/${Number(this.id) + 1}`
        : '';
    },

    prev() {
      return this.id > 0 ? `/Rent/${Number(this.id) - 1}` : '';
    },
  },
};
</script>

<style scoped>
.home_container {
  border-top: 1px solid #999;
  background-color: #f8f8f8;
}

.prev_next {
  margin: 1rem 3rem;
  font-family: inherit;
  font-weight: 300;
  position: relative;
  height: 30px;
}

.prev_next a {
  text-decoration: none;
  font-size: 1.4rem;
  color: #333;
  font-family: inherit;
  font-weight: 400;
  cursor: pointer;
}

.prev_next a.prev {
  position: absolute;
  left: 0%;
}

.prev_next a.next {
  position: absolute;
  right: 0%;
}

.prev_next.down {
  margin-top: 3rem;
}

h1 {
  font-size: 4rem;
  margin-top: 3.5rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

h5 {
  font-size: 1.1rem;
  font-weight: 400;
}

p {
  font-size: 1rem;
  font-weight: 300;
}

.home_container .info_container {
  position: relative;
  top: 5%;
  left: 21%;
  margin-bottom: 4rem;
}

.info {
  display: flex;
  gap: 3.5rem;
}

.under {
  display: flex;
  flex-direction: column;
}

.home_container img {
  display: flex;
  margin: auto;
  width: 1743px;
}

.about {
  width: 600px;
  position: relative;
  left: 25%;
  margin-top: 6rem;
}

.about p {
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.about h3 {
  font-weight: 300;
}

.icons {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.icons img {
  width: 60px;
  height: 58px;
  object-fit: cover;
  object-position: 50% 50%;
  margin: 0;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon p {
  font-weight: 400;
}

.buy-enter-from,
.buy-leave-to {
  opacity: 0;
}

.buy-enter-active {
  transition: all 1s ease-out;
}

.buy-leave-active {
  transition: all 1s ease-in;
}

.buy-enter-to,
.buy-leave-from {
  opacity: 1;
}
</style>
