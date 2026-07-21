<template>
  <section class="about-regulation-section">
    <div v-if="title || subtitle || items.length" class="about-regulation__top">
      <img :src="regularBg" alt="" class="about-regulation__emblem about-regulation__emblem--left" aria-hidden="true">
      <img :src="regularBg" alt="" class="about-regulation__emblem about-regulation__emblem--right" aria-hidden="true">

      <div class="container">
        <div class="about-regulation__head">
          <h2 v-if="title" class="about-regulation__title">{{ title }}</h2>
          <p v-if="subtitle" class="about-regulation__subtitle">{{ subtitle }}</p>
        </div>

        <div v-if="items.length" class="about-regulation__logos">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="about-regulation__logo-item"
          >
            <img v-if="item.image" :src="item.image" alt="" class="about-regulation__logo">
            <p v-if="item.label" class="about-regulation__logo-label">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="licenceTitle || licenceLead || licenceText || licenceNote || slides.length"
      class="about-regulation__license"
    >
      <div class="container">
        <div class="about-regulation__license-layout">
          <div v-if="slides.length" class="about-regulation__slider">
            <button
              type="button"
              class="about-regulation__slider-prev"
              aria-label="Предыдущий слайд"
              @click="swiper.prev()"
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L2 8L8 14" stroke="#3D558F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <ClientOnly>
              <swiper-container ref="containerRef" :init="false" class="about-regulation__swiper">
                <swiper-slide
                  v-for="(slide, idx) in slides"
                  :key="idx"
                  class="about-regulation__slide"
                >
                  <a
                    :href="slide.image"
                    data-fancybox="about-regulation-docs"
                    :data-caption="slide.title"
                    class="about-regulation__slide-link"
                  >
                    <img :src="slide.image" :alt="slide.title || ''" class="about-regulation__slide-image">
                    <div class="about-regulation__slide-zoom">
                      <span class="about-regulation__slide-zoom-circle">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="14" cy="14" r="9" stroke="#3D558F" stroke-width="2"/>
                          <path d="M21 21L28 28" stroke="#3D558F" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </div>
                  </a>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>

            <button
              type="button"
              class="about-regulation__slider-next"
              aria-label="Следующий слайд"
              @click="swiper.next()"
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L8 8L2 14" stroke="#3D558F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div class="about-regulation__content">
            <h3 v-if="licenceTitle" class="about-regulation__content-title">{{ licenceTitle }}</h3>

            <p
              v-if="licenceLead"
              class="about-regulation__lead"
              v-html="licenceLead"
            ></p>

            <div
              v-if="licenceText"
              class="about-regulation__text"
              v-html="licenceText"
            ></div>

            <p
              v-if="licenceNote"
              class="about-regulation__note"
              v-html="licenceNote"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import regularBg from '~/assets/images/regular.png'

const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  items: { type: Array, default: () => [] },
  licenceTitle: { type: String, default: '' },
  licenceLead: { type: String, default: '' },
  licenceText: { type: String, default: '' },
  licenceNote: { type: String, default: '' },
  slides: { type: Array, default: () => [] },
})

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  spaceBetween: 0,
})

const initFancybox = () => {
  Fancybox.unbind('[data-fancybox="about-regulation-docs"]')
  Fancybox.bind('[data-fancybox="about-regulation-docs"]', {
    hideScrollbar: true,
  })
}

watch(containerRef, (el) => {
  if (el) {
    nextTick(() => {
      swiper.reInitialize()
      nextTick(() => initFancybox())
    })
  }
})

watch(
  () => props.slides,
  () => {
    nextTick(() => {
      swiper.reInitialize()
      nextTick(() => initFancybox())
    })
  },
)

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="about-regulation-docs"]')
  Fancybox.close()
})
</script>
