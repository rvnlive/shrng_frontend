import { defineStore } from 'pinia'
import { useGeneralStore } from 'stores/generalStore'

export const useCarouselStore = defineStore('carouselStore', {
  state: () => ({
    carouselSlides: [
      { icon: 'share', description: 'This is a test description.' },
      { icon: 'chat_bubble', description: 'This is another test description.' },
      { icon: 'play_circle', description: 'And, another test description.' }
    ],
    activeSlideIndex: 0 as number
  }),
  getters: {},
  actions: {
    /**
     * * Delay function
     * * - Calculates the number of progress bar slices (eg: 100 / 3 = 0.33 per slice)
     * * then collects them into an array, so we can use the indexes for:
     * * - Displaying the correct progress on carousel slide change / navigation
     * * - Delaying the progress bar update with the carousel autoplay time / slide on each slide
     */
    slideDelay(): void {
      const generalStore = useGeneralStore()
      const timeout = generalStore.progressState.timeFrame / this.carouselSlides.length - 1500

      const slidePercentages: number[] = []
      for (let i = 0; i < this.carouselSlides.length; i++) {
        slidePercentages.push(1 / this.carouselSlides.length)
      }

      setTimeout(() => {
        generalStore.progressState.actualState = slidePercentages
          .filter((percentage, index) => {
            if (index <= this.activeSlideIndex) return percentage
          })
          .reduce((a, b) => a + b, 0)
      }, timeout)
    }
  }
})
