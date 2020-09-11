<template>
  <div>
    <Alert v-if="cart.length == 0 || !cart" />
    <CartItems v-else :cart="cart" />
    <CartFooter />
  </div>
</template>

<script>
import Alert from '@/components/cart/Alert'
import CartItems from '@/components/cart/CartItems'
import CartFooter from '@/components/cart/CartFooter'
export default {
  components: {
    Alert,
    CartItems,
    CartFooter,
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

<style scoped></style>
