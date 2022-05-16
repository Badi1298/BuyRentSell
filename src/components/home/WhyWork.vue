<template>
  <div class="squares">
    <base-square :type="'orange'">
      <h2 class="square orange">Exclusive</h2>
      <p class="square">Lorem ipsum dolor sit amet.</p>
    </base-square>
    <base-square :type="'red'">
      <h2 class="square red">Available</h2>
      <p class="square">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        consectetur.
      </p>
    </base-square>
    <base-square :type="'blue'">
      <h2 class="square blue">Flexible</h2>
      <p class="square">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </base-square>
  </div>
</template>

<style scoped>
.squares {
  display: flex;
  flex-direction: row;
}

h2.square {
  font-size: 3.5rem;
  font-weight: 400;
}

p.square {
  font-size: 1.2rem;
  font-weight: 300;
}

@media (max-width: 1100px) {
  .squares {
    flex-direction: column;
  }
}
</style>
