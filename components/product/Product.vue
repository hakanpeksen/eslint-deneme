<template>
  <div class="flex-cart">
    <p class="flex-product">
      <span> {{ product.title }} </span>
      <span class="price-container p-sm ml-3">
        {{ product.price }}
        ₺
      </span>
    </p>
    <div class="count-container mr-3 mt-3">
      <button
        class="button is-small is-danger mb-2 mr-2"
        @click="changeCount(false)"
      >
        -
      </button>
      <input v-model="product_count" disabled type="text" class="input w-45" />
      <button
        class="button is-small is-success ml-2"
        @click="changeCount(true)"
      >
        +
      </button>
    </div>
    <button class="button is-small is-primary mt-3" @click="addToCart">
      Sepete Ekle
    </button>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      product_count: 1,
    }
  },
  methods: {
    changeCount(status) {
      if (!status) {
        if (this.product_count > 1) {
          this.product_count--
        }
      } else {
        this.product_count++
      }
    },
    addToCart() {
      this.$store.dispatch('addToCart', {
        count: this.product_count,
        ...this.product,
      })
    },
  },
}
</script>
