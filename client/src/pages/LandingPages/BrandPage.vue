<template>
  <q-layout class="landing-page column items-center">
    <q-img
      class="brand-logo q-mt-lg"
      alt="Shrng logo"
      src="~assets/SVG/brand/logo/logo_transparentwhite.svg"
      :ratio="1 / 1" />
    <q-img class="brand-text q-mt-" alt="Shrng text" src="~assets/SVG/brand/text/text_white.svg" />
    <LoginForm />
  </q-layout>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGeneralStore } from 'src/stores/generalStore'

const { showBottomSheet } = storeToRefs(useGeneralStore())

onMounted(() => {
  showBottomSheet.value = true
})

onBeforeUnmount(() => {
  showBottomSheet.value = false
})
</script>
<style lang="scss">
@mixin gradient-background {
  background: #a6316d; /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, $primary 0%, $secondary 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    $primary 0%,
    $secondary 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    $primary 0%,
    $secondary 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6316d', endColorstr='#03398a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.landing-page {
  height: 100vh;
  width: 100vw;
  @include gradient-background;

  .brand-logo {
    width: 12rem;
    filter: drop-shadow(2px 2px 35px rgba(0, 0, 0, 0.5));
  }
  .brand-text {
    margin-top: -1.5rem;
    width: 8rem;
    filter: blur(0.15px);
  }
}
</style>
