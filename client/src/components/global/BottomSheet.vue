<template>
  <q-dialog v-model="showBottomSheet" persistent position="bottom" seamless>
    <component :is="props.dynamicComponent" />
  </q-dialog>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGeneralStore } from 'stores/generalStore'
//
const props = defineProps(['dynamicComponent', 'persistent', 'seamless'])

//
const { showBottomSheet } = storeToRefs(useGeneralStore())
</script>
<style lang="scss" scoped></style>
