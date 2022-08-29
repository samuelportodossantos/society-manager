<template>
  <div v-if="visible" class="loading">
    <img src="@/assets/images/loading.svg" alt="" />
  </div>
</template>

<script>
export default {
    name: 'LoadingComponent',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.loading {
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading img {
  width: 60px;
}
</style>