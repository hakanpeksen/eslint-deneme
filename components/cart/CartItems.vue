<template>
  <client-only>
    <table class="table is-bordered">
      <th class="has-text-centered p-4">
        Ürün Adı
      </th>
      <th class="has-text-centered">
        Adet
      </th>
      <th>
        Fiyat
      </th>
      <th>
        Tutar
      </th>
      <th>
        Sil
      </th>
      <tbody>
        <CartItem v-for="item in cart" :key="item.id" :item="item" />
      </tbody>
    </table>
  </client-only>
</template>
<script>
import CartItem from "@/components/cart/CartItem"
export default {
  components: {
    CartItem,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    cart: {
      type: Array,
      required: false,
    },
  },
}
</script>
