<template>
  <div>
    <div class="products">
      <div class="product" v-for="product in products" v-bind:key="product.id">
        <img class="product-image" :src="product.image" @click="viewDetails(product)" />
        <h4>{{ product.name }}</h4>
        <h3>${{ product.price }}.00</h3>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          name: "Fiberglass Claw Hammer",
          price: "6",
          id: 1,
          image: require("@/assets/hammer.jpg"),
          description:
            "The 16 oz. Claw Fiberglass Hammer makes a great addition to your toolbox. Its durable, strong design strikes and pulls through materials easily. A perm bond construction between its head and handle provides added strength while a heat-treated steel head provides durability.",
        },
        {
          name: "Home and Craft Scissors",
          price: "7",
          id: 2,
          image: require("@/assets/scissors.jpg"),
          description:
            "The Crescent Wiss® 8-1/2-inch Home and Craft Scissor is great for around the home craft use. The scissors feature soft comfort grips with an oversized, high-leverage bottom ring for easy use. The serrated lower blade grips materials securely to keep cuts even.",
        },
        {
          name: "Power Plus Box Fan",
          price: "29",
          id: 3,
          image: require("@/assets/boxFan.jpg"),
          description:
            "Outstanding air circulation with the Lasko Power Plus 20 in. 3-Speed Box Fan. The fan includes our innovative Wind Ring system for 20% more air velocity. The wider body allows for greater stability while the easy to carry handle makes portability a breeze. The patented Weather-Shield motor allows for easy free use in your window.",
        },
        {
          name: "Heavy-Duty Shipping Packaging Tape",
          price: "5",
          id: 4,
          image: require("@/assets/tape.jpg"),
          description:
            "Now even the heaviest packages can withstand rough handling. The strong, tough, solvent-free hot melt adhesive of Scotch Heavy Duty Packaging Tape locks in your heavy duty contents and locks out everything else.",
        },
      ],
    };
  },
  methods: {
    viewDetails(product) {
      this.$router.push({
        name: "productDetails",
        params: { id: product.id, product: product },
      });
    },
    addToCart(product) {
      console.log(product);
      const event = new CustomEvent("addToCart", { detail: product });
      window.dispatchEvent(event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.product {
  flex-grow: 1;
  width: 20%;
  padding: 0.3em;
  border: 2px solid #ccc;
  border-radius: 0.5em;
  margin: 0.5em;
}

.product-image {
  height: 150px;
}
</style>
