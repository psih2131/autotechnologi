<template>
  <main class="documentation-page">
    <section class="documentation-section">
      <div class="container">
        <nav class="documentation-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="documentation-section__breadcrumbs-sep">/</span>
          <span>Документация</span>
        </nav>

        <h1 class="documentation-section__title">Документация</h1>

        <ul class="documentation-section__list">
          <li>
            <a href="#">Лицензия учебного центра «Автотехнологии»</a>
          </li>
          <li>
            <a href="#">Политика в отношении обработки персональных данных</a>
          </li>
          <li>
            <a href="#">Положение о порядке текущего контроля успеваемости, промежуточной и итоговой аттестации обучающихся</a>
          </li>
          <li>
            <a href="#">Устав ООО «Автотехнологии»</a>
          </li>
          <li>
            <a href="#">Положение о порядке приёма, перевода, отчисления и восстановления обучающихся</a>
          </li>
          <li>
            <a href="#">Правила внутреннего распорядка обучающихся</a>
          </li>
          <li>
            <a href="#">Правила внутреннего трудового распорядка</a>
          </li>
          <li>
            <a href="#">Коллективный договор</a>
          </li>
          <li>
            <a href="#">Отчёт о результатах самообследования</a>
          </li>
          <li>
            <a href="#">Правила оказания платных образовательных услуг</a>
          </li>
          <li>
            <a href="#">Стоимость обучения в учебном центре «Автотехнологии»</a>
          </li>
          <li>
            <a href="#">Основные образовательные программы</a>
          </li>
          <li>
            <a href="#">Руководство. Педагогический состав</a>
          </li>
          <li>
            <a href="#">Материально-техническое обеспечение и оснащённость образовательного процесса</a>
          </li>
        </ul>

        <div class="documentation-section__license">
          <div class="documentation-section__license-content">
            <h2 class="documentation-section__license-title">Лицензия</h2>

            <div class="documentation-section__license-text">
              <div class="documentation-section__license-text-item-quote">
                Учебный центр «Автотехнологии» осуществляет образовательную деятельность на основании лицензии
                на право ведения образовательной деятельности № 9149 от 06.07.2017, выданной Министерством
                образования Челябинской области.
              </div>
              <p>
                Лицензия даёт право на осуществление образовательной деятельности по программам профессионального
                обучения, программам дополнительного профессионального образования и дополнительным
                общеразвивающим программам.
              </p>
              <p>
                Учебный центр «Автотехнологии» включён в перечень организаций, осуществляющих деятельность
                по профессиональному обучению и дополнительному профессиональному образованию работников
                организаций, поднадзорных Роструду.
              </p>
              <p>
                Проверить лицензию можно на официальном сайте Федеральной службы по надзору в сфере образования
                и науки (Рособрнадзор) в разделе «Реестр лицензий на осуществление образовательной деятельности»,
                указав ИНН организации: 4501171491.
              </p>
            </div>

            <p class="documentation-section__license-note">
              Информация, размещённая на данной странице, носит справочный характер. Для получения официальных
              документов обращайтесь в учебный центр.
            </p>
          </div>

          <div class="documentation-section__slider">
            <button
              type="button"
              class="documentation-section__slider-prev"
              aria-label="Предыдущий слайд"
              @click="swiper.prev()"
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L2 8L8 14" stroke="#3D558F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <ClientOnly>
              <swiper-container ref="containerRef" :init="false" class="documentation-section__swiper">
                <swiper-slide
                  v-for="(slide, idx) in slides"
                  :key="idx"
                  class="documentation-section__slide"
                >
                  <a
                    :href="slide.image"
                    data-fancybox="license-docs"
                    :data-caption="slide.title"
                    class="documentation-section__slide-link"
                  >
                    <img :src="slide.image" :alt="slide.title" class="documentation-section__slide-image">
                    <div class="documentation-section__slide-zoom">
                      <span class="documentation-section__slide-zoom-circle">
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
              class="documentation-section__slider-next"
              aria-label="Следующий слайд"
              @click="swiper.next()"
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L8 8L2 14" stroke="#3D558F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <AccreditationBanner />
  </main>
</template>

<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import doc1 from '~/assets/images/docs/doc1.png'
import doc2 from '~/assets/images/docs/doc2.png'
import doc3 from '~/assets/images/docs/doc3.png'

useHead({
  title: 'Документация — Автотехнологии',
})

const containerRef = ref(null)
const slides = ref([
  {
    image: doc1,
    title: 'Лицензия на образовательную деятельность',
  },
  {
    image: doc2,
    title: 'Аккредитация по охране труда',
  },
  {
    image: doc3,
    title: 'Удостоверение об утверждении курсов по ДОПОГ',
  },
])

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
})

const initFancybox = () => {
  Fancybox.unbind('[data-fancybox="license-docs"]')
  Fancybox.bind('[data-fancybox="license-docs"]', {
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
  Fancybox.unbind('[data-fancybox="license-docs"]')
  Fancybox.close()
})
</script>
