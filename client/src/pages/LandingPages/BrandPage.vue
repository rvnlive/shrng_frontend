<template>
  <q-layout class="landing-page column items-center">
    <q-img
      class="brand-logo q-mt-lg"
      alt="Shrng logo"
      src="~assets/SVG/brand/logo/logo_transparentwhite.svg"
      :ratio="1 / 1" />
    <q-img class="brand-text q-mt-" alt="Shrng text" src="~assets/SVG/brand/text/text_white.svg" />
  </q-layout>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGeneralStore } from 'src/stores/generalStore'

const { showBottomSheet } = storeToRefs(useGeneralStore())

onMounted(() => {
  showBottomSheet.value = true
})

onUnmounted(() => {
  showBottomSheet.value = false
})
</script>
<style lang="scss">
@mixin gradient-background {
  background: linear-gradient(40deg, #08acee 0%, #b721ff 80%, #9708cc 100%);
  background: -webkit-linear-gradient(40deg, #08acee 0%, #b721ff 80%, #9708cc 100%);
  background: -moz-linear-gradient(40deg, #08acee 0%, #b721ff 80%, #9708cc 100%);
  background: -o-linear-gradient(40deg, #08acee 0%, #b721ff 80%, #9708cc 100%);
  background-size: 150% 150%;
  animation: gradient-animation 8s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.landing-page {
  height: 100vh;
  width: 100vw;
  @include gradient-background;

  .brand-logo {
    width: 12rem;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.75));
  }
  .brand-text {
    margin-top: -1.5rem;
    width: 8rem;
    filter: blur(0.15px);
  }
}
</style>
