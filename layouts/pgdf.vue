<script setup lang="ts">
  import Header from './header.vue'
  import Footer from './footer.vue'
</script>

<template>
  <div class="fontPg">
    <Header />
   
    <Toast />
    <slot />

    <Footer />

  </div>
</template>

<style lang="scss">

@import '/assets/styles/theme.scss';

</style>
