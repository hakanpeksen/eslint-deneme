export const strict = false
export const state = () => ({
  products: [],
  cart: [],
  totalPrice: 0.0,
})

export const actions = {
  nuxtServerInit({ commit }) {
    return this.$axios.get('/api').then((res) => {
      commit('setProducts', res.data.products)
      commit('setCart', res.data.cart.items)
      commit('setTotalPrice', res.data.cart.totalPrice)
    })
  },
  addToCart({ commit }, product) {
    this.$axios
      .post('/api/add-to-cart', { product: product })
      .then((response) => {
        commit('setCart', response.data.cart.items)
        commit('setTotalPrice', response.data.cart.totalPrice)
      })
  },
  removeProduct({ commit }, product) {
    this.$axios
      .post('/api/remove-product', { product: product })
      .then((res) => {
        commit('setCart', res.data.cart.items)
        commit('setTotalPrice', res.data.cart.totalPrice)
      })
  },
  changeCount({ commit }, product) {
    this.$axios.post('/api/change-count', { product: product }).then((res) => {
      commit('setCart', res.data.cart.items)
      commit('setTotalPrice', res.data.cart.totalPrice)
    })
  },
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setCart(state, cart) {
    state.cart = cart
  },
  setTotalPrice(state, totalPrice) {
    state.totalPrice = totalPrice
  },
}

export const getters = {
  getProducts(state) {
    return state.products
  },
  getCart(state) {
    return state.cart
  },
  getTotalPrice(state) {
    return state.totalPrice
  },
}
