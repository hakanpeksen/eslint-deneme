<template>
  <div class="product-container card">
    <h3 class="mb-2 has-text-black has-text-centered">
      Ürün Listesi
    </h3>
    <div class="">
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
