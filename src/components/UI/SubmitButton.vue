<template>
  <button class="submit">
    <slot></slot>
  </button>
</template>

<style scoped>
.submit {
  width: 150px;
  height: 47px;
  /* margin-top: 2rem; */
  border: none;
  background-color: #2986cc;
  color: #fff;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 400;
  cursor: pointer;
}
</style>
