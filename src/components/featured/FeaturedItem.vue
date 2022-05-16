<template>
  <li>
    <div class="image">
      <img :src="image" />
      <router-link :to="`/${type}/${id}`">{{ type }} + </router-link>
    </div>
    <div class="myt-2">
      <h4>Project Name</h4>
      <h2 class="separate">{{ name }}</h2>
    </div>
    <div class="my-1 border-top">
      <h4 class="myt-1 myb-1">Address</h4>
      <h2 class="separate">{{ address }}</h2>
    </div>
    <div class="sft separate border-top border-bottom my-1">
      <div class="info my-1 mxr-2">
        <h4>Sqft</h4>
        <h2>{{ sqft }}</h2>
      </div>
      <div class="info my-1 mxr-2">
        <h4>Floor</h4>
        <h2>{{ floor }}</h2>
      </div>
      <div class="info my-1">
        <h4>Total Rooms</h4>
        <h2>{{ totalRooms }}</h2>
      </div>
    </div>
    <div class="my-1">
      <h4>Price</h4>
      <h2>{{ price }}</h2>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    'id',
    'image',
    'name',
    'address',
    'sqft',
    'floor',
    'totalRooms',
    'price',
    'type',
  ],
};
</script>

<style scoped>
li {
  margin: 3rem 0;
}

h4 {
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-weight: 300;
  font-size: 1.2rem;
}

.image {
  position: relative;
}

a {
  position: absolute;
  bottom: 5px;
  right: 0;
  cursor: pointer;
  background: #070b2e;
  padding: 1rem 2.3rem;
  color: #fff;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 300;
  text-decoration: none;
}

.sft {
  display: flex;
  border: none;
}

.info {
  margin-right: 2rem;
}

.my-1 {
  margin: 1rem 0;
}

.myt-1 {
  margin-top: 1rem;
}

.myt-2 {
  margin-top: 2rem;
}

.mxr-2 {
  margin-right: 2.5rem;
}

.border-top {
  border-top: 1px solid #999;
}

.border-bottom {
  border-bottom: 1px solid #999;
}
</style>
