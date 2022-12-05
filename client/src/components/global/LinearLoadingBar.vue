<template>
  <q-linear-progress v-show="showLoadingBar" :value="loadingProgress" class="" />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGeneralStore } from 'src/stores/generalStore'

const { showLoadingBar, loadingProgress } = storeToRefs(useGeneralStore())
</script>
