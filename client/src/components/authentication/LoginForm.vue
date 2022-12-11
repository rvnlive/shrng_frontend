<template>
  <q-card class="login-form text-white fixed-bottom" :class="'login-form--bottom' + formStyle">
    <q-card-section>
      <!-- <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md"> -->
      <q-form class="q-gutter-md">
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { useGeneralStore } from 'src/stores/generalStore'

const generalStore = useGeneralStore()

const formStyle = computed(() => {
  return generalStore.bottomSheetMode === 'full' ? '-shrink' : ''
})
</script>
<style lang="scss" scoped>
.login-form {
  height: 55vh;
  transition: all 0.5s ease-in-out;
  &--bottom {
    max-width: 1200px;
    margin: 0 auto;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(1px);
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.15) 100%);
  }
  &--bottom-shrink {
    width: 90%;
    max-width: 900px;
    height: 60vh;
    margin: 0 auto;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(1px);
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.15) 100%);
    opacity: 0.1;
  }

  &.login-form--open-full {
    background-color: rgba(200, 200, 255, 0.15);
    backdrop-filter: blur(5px);
  }
}
</style>
