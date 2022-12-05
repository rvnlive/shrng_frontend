<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <AppToolbar /> -->
    </q-header>
    <!-- <AppDrawer /> -->
    <BottomSheet :dynamic-component="WelcomeCarousel" :persistent="true" :seamless="true" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import WelcomeCarousel from 'src/components/landingPages/WelcomeCarousel.vue'
</script>
