<template>
  <tr class="bg-custom-color">
    <td class="pt-4">
      {{ item.title }}
    </td>
    <td>
      <div class="flex-cart">
        <button class="button is-small is-danger mr-2" @click="changeCount(-1)">
          -
        </button>
        <input
          v-model="product_count"
          disabled
          type="text"
          class="input w-45"
        />
        <button class="button is-small is-success ml-2" @click="changeCount(1)">
          +
        </button>
      </div>
    </td>
    <td class="pt-4">
      {{ item.price }}
      ₺
    </td>
    <td class="pt-4">
      {{ item.totalPrice }}
      ₺
    </td>
    <td class="pt-4">
      <button class="button is-small is-danger" @click="remove">
        Sil
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    product_count() {
      return this.item.count
    },
  },
  methods: {
    changeCount(value) {
      if (value == -1 && this.item.count == 1) {
        this.$store.dispatch('removeProduct', this.item)
      } else {
        this.item.count += value
        this.$store.dispatch('changeCount', this.item)
      }
    },
    remove() {
      this.$store.dispatch('removeProduct', this.item)
    },
  },
}
</script>
