<template>
  <section class="documents-section">
    <div class="container">
      <nav class="documents-section__breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span class="documents-section__breadcrumbs-sep">/</span>
        <span v-if="title">{{ title }}</span>
      </nav>

      <h1 v-if="title" class="documents-section__heading">{{ title }}</h1>

      <p v-if="subtitle" class="documents-section__intro">
        {{ subtitle }}
      </p>

      <div v-if="documents.length" class="documents-section__grid">
        <a
          v-for="(doc, i) in documents"
          :key="`doc-${i}`"
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
          <h3 v-if="doc.title" class="documents-section__card-title">{{ doc.title }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  documents: {
    type: Array,
    default: () => [],
  },
})

const initFancybox = () => {
  Fancybox.unbind('[data-fancybox="documents"]')
  if (!props.documents.length) return
  Fancybox.bind('[data-fancybox="documents"]', {
    animated: true,
    hideScrollbar: true,
  })
}

onMounted(() => {
  nextTick(() => initFancybox())
})

watch(() => props.documents, () => {
  nextTick(() => initFancybox())
}, { deep: true })

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="documents"]')
  Fancybox.close()
})
</script>
