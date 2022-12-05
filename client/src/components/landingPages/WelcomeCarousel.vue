<template>
  <q-carousel
    v-model="activeSlide"
    animated
    autoplay
    class="bottom-sheet__carousels rounded-large"
    :height="'50vh' || props.height"
    infinite
    navigation-position="top"
    navigation
    swipeable>
    <q-carousel-slide
      v-for="(appFunction, appFunctionIndex) in appFunctions"
      :key="appFunctionIndex"
      :name="appFunction.icon"
      class="column no-wrap flex-center items-center carousel">
      <q-icon :name="appFunction.icon" size="56px" />
      <div class="q-mt-md text-center">
        {{ appFunction.description }}
      </div>
      <LinearLoadingBar />
    </q-carousel-slide>
  </q-carousel>
</template>
<script setup>
const appFunctions = [
  { icon: 'share', description: 'This is a test description.' },
  { icon: 'chat_bubble', description: 'This is another test description.' },
  { icon: 'play_circle', description: 'And, another test description.' }
]

const activeSlide = ref('share')
</script>
<style lang="scss" scoped>
.rounded-large {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.bottom-sheet__carousels {
  min-height: 200px;
  height: 50vh;
  min-width: 300px;
  width: 100%;
  max-width: 800px;
  margin: 0 0.25rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  .carousel {
    min-height: 200px;
    height: 100%;
    margin: auto;
  }
}
</style>
