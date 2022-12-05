import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    // Bottom sheet related
    showBottomSheet: true,
    // Loading related
    showLoadingBar: true,
    loadingProgress: 1
  }),
  getters: {
    // Bottom sheet related
    bottomSheetVisible: state => state.showBottomSheet,
    // Loading related
    loadingVisible: state => state.showLoadingBar
  },
  actions: {
    // Bottom sheet related
    setBottomSheet(value) {
      value ? (this.showBottomSheet = true) : (this.bottomSheetVisible = false)
    },
    // Loading related
    setLoadingProgress(value) {
      if (value > 0) this.loadingProgress = value
      else if (!value || value === 0 || value === null) this.loadingProgress = 0
    }
  }
})
