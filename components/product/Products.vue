<template>
  <div class="product-container card shadow mr-5">
    <h3 class="text-center">
      Ürün Listesi
    </h3>
    <div class="list-group">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import Product from "@/components/product/Product"
export default {
  components: {
    Product,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    products: {
      type: Array,
      required: false,
    },
  },
}
</script>
