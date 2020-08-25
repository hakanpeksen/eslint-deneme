<template>
  <div class="container p-sm">
    <Products :products="products" />
    <Cart :cart="cart" />
  </div>
</template>

<script>
import Products from "@/components/product/Products"
import Cart from "@/components/cart/Cart"

export default {
  components: { Cart, Products },
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
    cart() {
      return this.$store.getters.getCart
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
