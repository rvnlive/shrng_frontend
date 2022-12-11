import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    // Bottom sheet related
    showBottomSheet: true as boolean,
    bottomSheetMode: '' as string,
    // Loading related
    showProgressBar: true as boolean,
    progressState: {
      timeFrame: 0 as number,
      actualState: 0 as number
    }
  }),
  getters: {},
  actions: {
    // Bottom sheet related
    setBottomSheet(value: boolean): void {
      value ? (this.showBottomSheet = true) : (this.showBottomSheet = false)
    }
  }
})
