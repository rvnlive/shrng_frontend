<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <AppToolbar /> -->
    </q-header>
    <!-- <AppDrawer /> -->
    <!-- <BottomSheet :dynamic-component="GlobalCarousel" :persistent="true" :seamless="true" /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <BottomSheet :dynamic-component="GlobalCarousel" :persistent="true" :seamless="true" />
  </q-layout>
</template>

<script setup>
import GlobalCarousel from 'src/components/global/GlobalCarousel.vue'
</script>
