<template>
  <main>
    <h2>Product Details</h2>
    <h3>{{product.name}}</h3>
    <img :src="product.image" />
    <p>{{product.description}}</p>
  </main>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["product"],
};
</script>

<style scoped>
</style>