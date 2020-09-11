<template>
  <div>
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
    <!-- Example -->
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="timeline">
            <!-- timeline  -->
            <div class="card-t">
              <div class="svg" />
              <div class="content-t">
                <h3 class="has-text-black">
                  Başlıksssssssssssssssssssddddddd
                </h3>
                <p>Paragraf</p>
              </div>
              <div class="arrow" />
            </div>
          </div>
          <!-- timeline  -->
        </div>
      </div>
    </div>
    <!-- Example -->
    <!-- Example 2 -->
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="timeline-2">
            <div class="card-2">
              <div class="icon" />
              <div class="text-2 has-text-black">
                Scenic
              </div>
              <div class="check" />
            </div>
            <div class="card-2">
              <div class="icon" />
              <div class="text has-text-black">
                Scenic
              </div>
              <div class="check" />
            </div>
            <div class="card-2">
              <div class="icon" />
              <div class="text has-text-black">
                Scenic
              </div>
              <div class="check" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Example 2 -->
    <!-- Example 3 -->
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="tab">
            <div class="button-3">
              <div class="svg-3" />
              <div class="text">
                Home
              </div>
            </div>
            <div class="button-3">
              <div class="svg-3" />
              <div class="text">
                Fınd
              </div>
            </div>
            <div class="button-3">
              <div class="svg-3" />
              <div class="text">
                Space
              </div>
            </div>
            <div class="button-3">
              <div class="svg-3" />
              <div class="text">
                My
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Example 3 -->
  </div>
</template>

<script>
import Products from '@/components/product/Products'
import Cart from '@/components/cart/Cart'

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
.timeline {
  display: flex;
  align-items: center;
  width: 500px;
  height: 300px;
  background-color: #eeeeee;
  padding: 20px;
}
.card-t {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
}
.svg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
}
.content-t {
  flex-grow: 1;
  margin-left: 20px;
  margin-right: 20px;
}
.arrow {
  width: 5px;
  height: 30px;
  background-color: #cccccc;
}
/* Example 2 */
.timeline-2 {
  display: flex;
  flex-wrap: wrap;
  background-color: black;
  width: 500px;
  height: 500px;
  padding: 30px;
}
.card-2 {
  margin: 10px;
  position: relative;
  width: calc(50% - 20px);
  height: 200px;
  border-radius: 10px;
  color: #85e6fe;
  background-color: #474c5a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 50px;
  height: 50px;
  background-color: currentColor;
  margin-bottom: 10px;
}
.check {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  right: 20px;
  top: 20px;
}
/* Example 3 */
.tab {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 80px;
  background-color: #eeeeee;
}
.button-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}
.svg-3 {
  font-size: 20px;
  width: 1em;
  height: 1em;
  background-color: #cccccc;
  margin-bottom: 5px;
}
</style>
