<template>
  <div class="container p-sm">
    <form action="">
      <b-field class="p-t-md trend-form" label="Email" label-for="nf_email">
        <b-input
          id="nf_email"
          type="email"
          size="is-medium"
          placeholder="Email address"
          required
        />
      </b-field>
    </form>
    <div class="p-md">
      test
    </div>
    <span class="icon-google source-icon has-text-warning" />
    <span class="icon-newspaper source-icon" />
    <span class="icon-cancel-circle source-icon" />
    <span class="icon-next source-icon" />
    <span class="mdi-plus source-icon" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
