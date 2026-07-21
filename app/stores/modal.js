import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    active: null,
  }),

  getters: {
    isOpen: (state) => Boolean(state.active),
  },

  actions: {
    open(name) {
      this.active = name
    },

    close() {
      this.active = null
    },
  },
})
