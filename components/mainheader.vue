<template>
  <header>
    <nav
      id="navMain"
      class="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container p-l-sm p-r-sm">
        <div class="navbar-brand">
          <n-link class="navbar-item" to="/" no-prefetch />
          <a
            role="button"
            aria-controls="contentIdForA11y2"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMain"
            :class="[isOpen ? 'is-active' : '']"
            @click="isOpen = !isOpen"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="navbarMain"
          :class="[isOpen ? 'is-active' : '']"
          aria-controls="contentIdForA11y2"
          class="navbar-menu has-text-right"
        >
          <div class="navbar-end">
            <n-link to="/newsletter/create" class="navbar-item has-text-white">
              Newsletter
            </n-link>
            <n-link to="/user/alerts" class="navbar-item has-text-white">
              Alerts
            </n-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      data: 'hakan',
    }
  },
}
</script>
