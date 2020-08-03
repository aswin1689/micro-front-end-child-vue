<template>
  <div class="products">
    <ul>
      <li
        v-for="product in products"
        v-bind:key="product.id"
      >{{ product.name }} - {{ product.price }} <img :src="product.image" /></li>
    </ul>
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
          image: "../assets/hammer.jpg",
          description:
            "The 16 oz. Claw Fiberglass Hammer makes a great addition to your toolbox. Its durable, strong design strikes and pulls through materials easily. A perm bond construction between its head and handle provides added strength while a heat-treated steel head provides durability.",
        },
        {
          name: "Home and Craft Scissors",
          price: "7",
          id: 2,
          image: "../assets/scissors.jpg",
          description:
            "The Crescent Wiss® 8-1/2-inch Home and Craft Scissor is great for around the home craft use. The scissors feature soft comfort grips with an oversized, high-leverage bottom ring for easy use. The serrated lower blade grips materials securely to keep cuts even.",
        },
        {
          name: "Power Plus Box Fan",
          price: "29",
          id: 3,
          image: "../assets/boxFan.jpg",
          description:
            "Outstanding air circulation with the Lasko Power Plus 20 in. 3-Speed Box Fan. The fan includes our innovative Wind Ring system for 20% more air velocity. The wider body allows for greater stability while the easy to carry handle makes portability a breeze. The patented Weather-Shield motor allows for easy free use in your window.",
        },
        {
          name: "Heavy-Duty Shipping Packaging Tape",
          price: "5",
          id: 4,
          image: "../assets/tape.jpg",
          description:
            "Now even the heaviest packages can withstand rough handling. The strong, tough, solvent-free hot melt adhesive of Scotch Heavy Duty Packaging Tape locks in your heavy duty contents and locks out everything else.",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
