<template>
  <div :style="{ height: listHeaderHeight + 'px' }">
    <section
      id="listHeader"
      :class="[isSticky ? 'navbar is-fixed-top' : '']"
      class="section is-paddingless has-background-white"
      style="border-bottom: dashed 1px #cccccc;"
    >
      <div class="container listheader p-sm">
        <div class="">
          <div class="columns is-vcentered p-t-md p-b-sm">
            <div class="column is-narrow">
              <form class="form-inline">
                <div class="field">
                  <div class="control">
                    <div class="select w-100p">
                      <select
                        class="w-100p is-size-5 is-uppercase"
                        aria-label="Country"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="column is-narrow">
              <div class="tabs is-full-width is-size-5">
                <ul>
                  <li>
                    <n-link :to="'/news'" class="is-active">
                      NEWS
                    </n-link>
                  </li>
                  <li>
                    <n-link :to="'/news'" class="is-active">
                      GOOGLE
                    </n-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSticky: false,
      listHeaderHeight: 0,
    }
  },

  beforeMount: function () {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
      window.addEventListener("resize", this.handleResize)
    }
  },
  destroyed: function () {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
      window.removeEventListener("resize", this.handleResize)
    }
  },
  mounted: function () {
    this.handleResize()
    this.handleScroll()
  },
  methods: {
    handleScroll() {
      const navMainHeight = document.getElementById("navMain").offsetHeight
      if (window.pageYOffset >= navMainHeight) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    },
    handleResize() {
      this.listHeaderHeight = document.getElementById("listHeader").offsetHeight
    },
  },
}
</script>
