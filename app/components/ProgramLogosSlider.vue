<template>
  <section class="program-logos-section">
    <div class="program-logos">
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="program-logos__swiper">
          <swiper-slide
            v-for="(logo, idx) in logoSlides"
            :key="idx"
            class="program-logos__slide"
          >
            <img :src="logo" alt="" class="program-logos__img">
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import logo1 from '~/assets/images/logos/x1.png'
import logo2 from '~/assets/images/logos/x2.png'
import logo3 from '~/assets/images/logos/x3.png'
import logo4 from '~/assets/images/logos/x4.png'
import logo5 from '~/assets/images/logos/x5.png'
import logo6 from '~/assets/images/logos/x6.png'
import logo7 from '~/assets/images/logos/x7.png'

const containerRef = ref(null)

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]
const logoSlides = [...logos, ...logos]

const swiper = useSwiper(containerRef, {
  slidesPerView: 'auto',
  spaceBetween: 50,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  allowTouchMove: false,
})

watch(containerRef, (el) => {
  if (el) {
    nextTick(() => swiper.reInitialize())
  }
})
</script>
