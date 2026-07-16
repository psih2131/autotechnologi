<template>
  <section class="about-letters-section">
    <div class="container">
      <h2 class="about-letters__title">Благодарственные письма от компаний</h2>

      <div class="about-letters__grid">
        <a
          v-for="(letter, idx) in letters"
          :key="idx"
          :href="letter"
          data-fancybox="about-letters"
          class="about-letters__link"
        >
          <img :src="letter" alt="" class="about-letters__img">
          <div class="about-letters__zoom">
            <span class="about-letters__zoom-circle">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="9" stroke="#3D558F" stroke-width="2"/>
                <path d="M21 21L28 28" stroke="#3D558F" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import sl1 from '~/assets/images/docs/sl1.png'
import sl2 from '~/assets/images/docs/sl2.png'
import sl3 from '~/assets/images/docs/sl3.png'
import sl4 from '~/assets/images/docs/sl4.png'

const letters = [sl1, sl2, sl3, sl4]

const initFancybox = () => {
  Fancybox.unbind('[data-fancybox="about-letters"]')
  Fancybox.bind('[data-fancybox="about-letters"]', {
    hideScrollbar: true,
  })
}

onMounted(() => {
  initFancybox()
})

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="about-letters"]')
  Fancybox.close()
})
</script>
