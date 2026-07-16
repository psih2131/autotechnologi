<template>
  <section class="documents-section">
    <div class="container">
      <nav class="documents-section__breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span class="documents-section__breadcrumbs-sep">/</span>
        <span>Документация</span>
      </nav>

      <h1 class="documents-section__heading">Аккредитации учебного центра</h1>

      <p class="documents-section__intro">
        Учебный центр «Автотехнологии» осуществляет обучение по программам дополнительного профессионального образования и специализированным направлениям подготовки в соответствии с действующими требованиями законодательства. На странице представлены основные аккредитации, лицензии и разрешительные документы учебного центра.
      </p>

      <div class="documents-section__grid">
        <a
          v-for="doc in documents"
          :key="doc.title"
          :href="doc.image"
          data-fancybox="documents"
          :data-caption="doc.title"
          class="documents-section__card"
        >
          <img :src="doc.image" :alt="doc.title" class="documents-section__image">
          <div class="documents-section__overlay"></div>
          <div class="documents-section__zoom">
            <span class="documents-section__zoom-circle">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="9" stroke="#3D558F" stroke-width="2"/>
                <path d="M21 21L28 28" stroke="#3D558F" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </div>
          <h3 class="documents-section__card-title">{{ doc.title }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import doc1 from '~/assets/images/docs/doc1.png'
import doc2 from '~/assets/images/docs/doc2.png'
import doc3 from '~/assets/images/docs/doc3.png'

const documents = [
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
]

onMounted(() => {
  Fancybox.bind('[data-fancybox="documents"]', {
    animated: true,
    hideScrollbar: true,
  })
})

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="documents"]')
  Fancybox.close()
})
</script>
