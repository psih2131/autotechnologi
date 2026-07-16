<template>
  <section class="about-regulation-section">
    <div class="about-regulation__top">
      <img :src="regularBg" alt="" class="about-regulation__emblem about-regulation__emblem--left" aria-hidden="true">
      <img :src="regularBg" alt="" class="about-regulation__emblem about-regulation__emblem--right" aria-hidden="true">

      <div class="container">
        <div class="about-regulation__head">
          <h2 class="about-regulation__title">Государственное регулирование</h2>
          <p class="about-regulation__subtitle">
            Программы обучения и порядок аттестации соответствуют требованиям Министерства транспорта
            Российской Федерации и профильных надзорных органов.
          </p>
        </div>

        <div class="about-regulation__logos">
          <div
            v-for="(item, idx) in gosItems"
            :key="idx"
            class="about-regulation__logo-item"
          >
            <img :src="item.image" alt="" class="about-regulation__logo">
            <p class="about-regulation__logo-label">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-regulation__license">
      <div class="container">
        <div class="about-regulation__license-layout">
          <div class="about-regulation__slider">
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
                    <img :src="slide.image" :alt="slide.title" class="about-regulation__slide-image">
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
            <h3 class="about-regulation__content-title">Лицензия</h3>

            <p class="about-regulation__lead">
              Лицензия №1418 на осуществление образовательной деятельности получена 06.07.2017.
              Для дополнительного обучения в области профессиональной компетенции международных
              автомобильных перевозчиков в 2017 году пройдена
              <a href="#">аккредитация</a>
              Экспертной комиссией Министерства транспорта РФ.
            </p>

            <div class="about-regulation__text">
              <p>
                <strong>Учебный центр «Автотехнологии» включен в перечень учебных организаций, имеющих право
                осуществлять дополнительное обучение в области профессиональной компетенции международных
                перевозчиков</strong>
                (<a href="#">проверить на сайте Росавтотранса</a>)
              </p>
              <p>
                <strong>Также вы можете проверить действительность Лицензии</strong>
                <a href="#">на сайте Рособрнадзора</a>
                <strong>(поле ИНН нужно ввести 4501171491 и нажать кнопку «Поиск»).</strong>
              </p>
            </div>

            <p class="about-regulation__note">
              Мы действуем в рамках законодательства Российской Федерации и в соответствии
              с требованиями приказов Минтранса и Постановлений Правительства Российской Федерации.
            </p>
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

import gos1 from '~/assets/images/gos1.png'
import gos2 from '~/assets/images/gos2.png'
import gos3 from '~/assets/images/gos3.png'
import gos4 from '~/assets/images/gos4.png'
import gos5 from '~/assets/images/gos5.png'

import doc1 from '~/assets/images/docs/doc1.png'
import doc2 from '~/assets/images/docs/doc2.png'
import doc3 from '~/assets/images/docs/doc3.png'

const gosItems = [
  { image: gos1, label: 'Министерство транспорта Российской Федерации' },
  { image: gos2, label: 'Министерство науки и высшего образования Российской Федерации' },
  { image: gos3, label: 'Министерство просвещения Российской Федерации' },
  { image: gos4, label: 'Федеральная Служба по надзору в сфере образования и науки' },
  { image: gos5, label: 'Федеральная служба по надзору в сфере транспорта' },
]

const containerRef = ref(null)

const slides = [
  { image: doc1, title: 'Лицензия на образовательную деятельность' },
  { image: doc2, title: 'Аккредитация по охране труда' },
  { image: doc3, title: 'Удостоверение об утверждении курсов по ДОПОГ' },
]

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

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="about-regulation-docs"]')
  Fancybox.close()
})
</script>
