<template>
  <div class="home-faq__item" :class="{ 'home-faq__item--open': open }">
    <button
      type="button"
      class="home-faq__question"
      :aria-expanded="open"
      @click="$emit('toggle')"
    >
      <span>{{ question }}</span>
      <span class="home-faq__toggle" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="#3D558F" stroke-width="1.5" stroke-linecap="round" class="home-faq__toggle-v"/>
          <path d="M5 12H19" stroke="#3D558F" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>
    </button>
    <ClientOnly>
      <Vue3SlideUpDown :model-value="open" :duration="300">
        <div class="home-faq__answer">
          <p>{{ answer }}</p>
        </div>
      </Vue3SlideUpDown>
    </ClientOnly>
  </div>
</template>
<script setup>
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['toggle'])
</script>
