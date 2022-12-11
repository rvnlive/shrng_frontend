<template>
  <div>
    <q-carousel
      v-model="activeSlide"
      animated
      :autoplay="props.delay || 5000"
      :color="props.color || 'black'"
      class="carousels rounded-large shadow-12 column justify-center"
      :height="props.height || 'auto'"
      infinite
      swipeable>
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :name="slide.icon"
        class="carousel column col-12 items-center">
        <q-icon :name="slide.icon" color="blue" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ slide.description }}
        </div>
      </q-carousel-slide>
    </q-carousel>
    <LinearLoadingBar />
  </div>
</template>
<script setup lang="ts">
import { useCarouselStore } from 'stores/carouselStore'
import { useGeneralStore } from 'stores/generalStore'

/** Props and stores */
const props = defineProps(['color', 'delay', 'height'])
const carouselStore = useCarouselStore()
const generalStore = useGeneralStore()
//
//
/** Reactive */
const activeSlide = ref('share')
//
/** Computed */
const slides = computed(() => {
  return carouselStore.carouselSlides
})

const slideIndex = computed(() => {
  return slides.value.findIndex(slide => slide.icon === activeSlide.value)
})
//
/** Methods */
const setProgress = () => {
  return props.delay
    ? (generalStore.progressState.timeFrame = props.delay)
    : (generalStore.progressState.timeFrame = 5000)
}
//
/** Created */
setProgress()
//
/** Mounted */
onMounted(() => {
  carouselStore.slideDelay()
})
//
/** Watchers */
watch(slideIndex, index => {
  carouselStore.activeSlideIndex = index
  carouselStore.slideDelay()
})
</script>
<style lang="scss" scoped>
.rounded-large {
  border-radius: 50px;
}

.carousels {
  margin: auto;
  min-height: 37.5vh;
  height: 100%;
  min-width: 250px;
  width: 100%;
  max-width: 800px;
  .carousel {
  }
}
</style>
