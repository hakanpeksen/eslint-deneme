<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <mainheader theme="light" />
    </div>
    <div class="hero-body">
      <div class="container">
        <nuxt />
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <nuxt />
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
import mainheader from "~/components/mainheader"

export default {
  components: {
    mainheader,
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
