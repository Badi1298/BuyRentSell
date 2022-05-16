<template>
  <div class="box">
    <slot></slot>
    <div class="color" :class="type"></div>
  </div>
</template>

<script>
export default {
  props: ['type'],
};
</script>

<style scoped>
.box {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #f4f4f4;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #999;
  border-top: 1px solid #999;
}

.color {
  position: absolute;
  bottom: 0;
  height: 15px;
  width: 100%;
}

.orange {
  background-color: #ff6502;
}

.red {
  background-color: #9c2b2b;
}

.blue {
  background-color: #0b5394;
}
</style>
