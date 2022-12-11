<template>
  <q-dialog v-model="showBottomSheet" persistent position="bottom" :seamless="props.seamless || false">
    <q-card
      class="bottom-sheet bottom-sheet--bottom text-white fixed-bottom"
      :class="`bottom-sheet--open-${drawerMode}`"
      :style="drawerStyle">
      <q-card-section
        class="bottom-sheet__handler--horizontal sticky-top"
        v-touch-pan.mouse.vertical="slideDrawer"
        @click="cycleDrawer">
        <hr class="handle" />
      </q-card-section>
      <q-card-section v-if="drawerMode !== 'handler'" class="bottom-sheet__dynamic-component">
        <component :is="props.dynamicComponent" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { useGeneralStore } from 'stores/generalStore'
//
import type { vTouch, cssStyle } from 'typings/interfaces/Global'

// //
const props = defineProps(['dynamicComponent', 'persistent', 'seamless'])
const { showBottomSheet, bottomSheetMode } = storeToRefs(useGeneralStore())
const $q = useQuasar()
//
const drawerMinHeight = 50
const drawerTopOffset = ($q.screen.height / 100) * 50
const drawerOpenRatioHalf = 0
const drawerPos = ref(drawerMinHeight)
let animateTimeout: ReturnType<typeof setTimeout>

const drawerMaxHeight = computed((): number => {
  return Math.max(0, $q.screen.height - drawerTopOffset)
})

const drawerOpenRatio = computed((): number => {
  return Math.round(
    (Math.max(0, drawerPos.value - drawerMinHeight) / Math.max(1, drawerMaxHeight.value - drawerMinHeight)) *
      100
  )
})

const drawerStyle = computed((): cssStyle => {
  return {
    height: `${drawerMaxHeight.value}px`,
    transform: `translateY(${-drawerPos.value}px)`
  }
})

const drawerMode = computed((): string => {
  if (drawerOpenRatio.value > drawerOpenRatioHalf) {
    return 'full'
  }

  return drawerOpenRatio.value > 0 ? 'half' : 'handler'
})

const slideDrawer = (ev: vTouch): void => {
  const { direction, delta, isFinal } = ev

  drawerPos.value = Math.max(drawerMinHeight, Math.min(drawerMaxHeight.value, drawerPos.value - delta.y))

  if (isFinal === true) {
    nextTick(() => {
      // const aboveHalf = drawerOpenRatio.value > drawerOpenRatioHalf
      const targetHeight =
        direction === 'up'
          ? // ? aboveHalf
            //   ? drawerMaxHeight.value
            //   : Math.round(drawerMaxHeight.value / 2)
            // : aboveHalf
            Math.round(drawerMaxHeight.value)
          : drawerMinHeight

      animateDrawerTo(targetHeight)
    })
  }
}

function cycleDrawer(): void {
  const targetHeight = drawerMode.value === 'handler' ? Math.round(drawerMaxHeight.value) : drawerMinHeight

  animateDrawerTo(targetHeight)
}

const animateDrawerTo = (height: number): void => {
  clearTimeout(animateTimeout)
  const diff = height - drawerPos.value

  if (diff !== 0) {
    drawerPos.value += Math.abs(diff) < 2 ? diff : Math.round(diff / 2)
    animateTimeout = setTimeout(() => {
      animateDrawerTo(height)
    }, 30)
  }
}

watch(drawerMode, (mode: string) => {
  mode ? (bottomSheetMode.value = mode) : (bottomSheetMode.value = '')
})

onMounted((): void => {
  cycleDrawer()
})

onBeforeUnmount((): void => {
  clearTimeout(animateTimeout)
})
</script>
<style lang="scss" scoped>
.bottom-sheet {
  &--bottom {
    bottom: unset;
    top: 100%;
    max-width: 1000px;
    margin: 0 auto;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(1px);
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.15) 100%);
  }

  &.bottom-sheet--open-half,
  &.bottom-sheet--open-full {
    background-color: rgba(200, 200, 255, 0.15);
    backdrop-filter: blur(5px);
  }

  &__handler {
    &--horizontal {
      width: 100%;
      cursor: grab;

      .handle {
        border-style: none;
        width: 5rem;
        height: 8px;
        margin: 0 auto;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(5px);
      }
    }
  }

  &__dynamic-component {
    height: 40vh;
    margin: auto;
  }
}
</style>
