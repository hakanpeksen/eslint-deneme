<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Products :products="products" />
      </div>
      <div class="column">
        <Cart :cart="cart" />
      </div>
    </div>
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
