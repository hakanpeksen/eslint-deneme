<template>
  <div class="">
    <strong style="font-size: 18px;">Toplam Tutar : </strong>
    <span class="total-price-container">
      {{ cartTotalPrice.toFixed(2) }}
      ₺
    </span>
  </div>
</template>
<script>
export default {
  computed: {
    cartTotalPrice() {
      return this.$store.getters.getTotalPrice
    },
  },
}
</script>
