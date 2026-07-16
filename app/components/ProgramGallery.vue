<template>
  <section class="program-gallery-section">
    <div class="container">
      <div class="program-gallery">
    <div
      v-for="(row, rowIdx) in galleryRows"
      :key="rowIdx"
      class="program-gallery__row"
    >
      <a
        v-for="(photo, idx) in row"
        :key="rowIdx + '-' + idx"
        :href="photo"
        data-fancybox="program-gallery"
        class="program-gallery__link"
      >
        <img :src="photo" alt="" class="program-gallery__img">
        <div class="program-gallery__zoom">
          <span class="program-gallery__zoom-circle">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="14" cy="14" r="9" stroke="#3D558F" stroke-width="2"/>
              <path d="M21 21L28 28" stroke="#3D558F" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
        </div>
      </a>
    </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import photo1 from '~/assets/images/photo/x1.jpg'
import photo2 from '~/assets/images/photo/x2.jpg'
import photo3 from '~/assets/images/photo/x3.jpg'
import photo4 from '~/assets/images/photo/x4.jpg'
import photo5 from '~/assets/images/photo/x5.jpg'
import photo6 from '~/assets/images/photo/x6.jpg'
import photo7 from '~/assets/images/photo/x7.jpg'
import photo8 from '~/assets/images/photo/x8.jpg'
import photo9 from '~/assets/images/photo/x9.jpg'
import photo10 from '~/assets/images/photo/x10.jpg'
import photo11 from '~/assets/images/photo/x11.jpg'

const galleryRows = [
  [photo1, photo2, photo3, photo4],
  [photo5, photo6, photo7, photo8],
  [photo9, photo10, photo11],
]

const initGalleryFancybox = () => {
  Fancybox.unbind('[data-fancybox="program-gallery"]')
  Fancybox.bind('[data-fancybox="program-gallery"]', {
    hideScrollbar: true,
  })
}

onMounted(() => {
  initGalleryFancybox()
})

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="program-gallery"]')
  Fancybox.close()
})
</script>
