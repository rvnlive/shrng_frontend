<template>
  <q-linear-progress
    v-show="showProgressBar"
    :value="progressState.actualState"
    color="primary"
    class="progress-bar" />
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from 'src/stores/generalStore'

const { showProgressBar, progressState } = storeToRefs(useGeneralStore())
</script>
<style lang="scss" scoped>
.progress-bar {
  position: relative;
  margin: 0 auto;
  margin-top: -1.5em;
  height: 0.35rem;
  width: 70%;
  border-radius: 5px;
}
</style>
