<template>
  <main class="documentation-page">
    <section class="documentation-section">
      <div class="container">
        <nav class="documentation-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="documentation-section__breadcrumbs-sep">/</span>
          <span v-if="pageTitle">{{ pageTitle }}</span>
        </nav>

        <h1 v-if="pageTitle" class="documentation-section__title">{{ pageTitle }}</h1>

        <ul v-if="docsList.length" class="documentation-section__list">
          <li v-for="(doc, i) in docsList" :key="`doc-${i}`">
            <a v-if="doc.href" :href="doc.href" target="_blank" rel="noopener">{{ doc.title }}</a>
            <span v-else>{{ doc.title }}</span>
          </li>
        </ul>

        <div
          v-if="hasLicenseBlock"
          class="documentation-section__license"
        >
          <div class="documentation-section__license-content">
            <h2 v-if="licenceTitle" class="documentation-section__license-title">{{ licenceTitle }}</h2>

            <div v-if="licenceSubtitle || licenceParagraphs.length" class="documentation-section__license-text">
              <div v-if="licenceSubtitle" class="documentation-section__license-text-item-quote">
                {{ licenceSubtitle }}
              </div>
              <p v-for="(paragraph, i) in licenceParagraphs" :key="`licence-p-${i}`">
                {{ paragraph }}
              </p>
            </div>

            <p v-if="licenceDownText" class="documentation-section__license-note">
              {{ licenceDownText }}
            </p>
          </div>

          <div v-if="slides.length" class="documentation-section__slider">
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

    <AccreditationBanner
      v-if="banner"
      :title="banner.title || ''"
      :description="banner.text || ''"
      :image="mediaUrl(banner.image)"
    />
  </main>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const config = useRuntimeConfig()
const mediaUrl = useStrapiMedia()

const query = new URLSearchParams({
  'populate[docs_list][populate]': 'file',
  'populate[images_for_slider]': 'true',
  'populate[banner_section][populate]': 'image',
  'populate[Seo][populate][shareImage]': 'true',
  'populate[Seo][populate][twitterImage]': 'true',
}).toString()

const { data } = await useAsyncData('page-document', () =>
  $fetch(`/api/page-document?${query}`, { baseURL: config.public.apiUrl }).catch(() => null),
)

const page = computed(() => data.value?.data ?? {})

const pageTitle = computed(() => page.value.title_docs || '')
const licenceTitle = computed(() => page.value.licence_title || '')
const licenceSubtitle = computed(() => page.value.licence_subtitle || '')
const licenceDownText = computed(() => page.value.licence_down_text || '')

const licenceParagraphs = computed(() => {
  const text = page.value.licence_text
  if (!text) return []
  return text.split(/\n+/).map((p) => p.trim()).filter(Boolean)
})

const docsList = computed(() => {
  if (!page.value.docs_list?.length) return []
  return page.value.docs_list.map((item) => {
    const file = Array.isArray(item.file) ? item.file[0] : item.file
    return {
      title: item.title || '',
      href: mediaUrl(file) || '',
    }
  }).filter((item) => item.title)
})

const slides = computed(() => {
  if (!page.value.images_for_slider?.length) return []
  return page.value.images_for_slider
    .map((img) => ({
      image: mediaUrl(img),
      title: img.alternativeText || img.name || '',
    }))
    .filter((slide) => slide.image)
})

const hasLicenseBlock = computed(() =>
  Boolean(
    licenceTitle.value
    || licenceSubtitle.value
    || licenceParagraphs.value.length
    || licenceDownText.value
    || slides.value.length,
  ),
)

const banner = computed(() => page.value.banner_section ?? null)
const seo = computed(() => page.value.Seo ?? null)

useSeoMeta({
  title: () => seo.value?.metaTitle || undefined,
  description: () => seo.value?.metaDescription || undefined,
  keywords: () => seo.value?.keywords || undefined,
  robots: () => seo.value?.metaRobots || undefined,
  ogTitle: () => seo.value?.ogTitle || seo.value?.metaTitle || undefined,
  ogDescription: () => seo.value?.ogDescription || seo.value?.metaDescription || undefined,
  ogType: () => seo.value?.ogType || undefined,
  ogUrl: () => seo.value?.ogUrl || undefined,
  ogImage: () => mediaUrl(seo.value?.shareImage) || undefined,
  twitterCard: () => seo.value?.twitterCard || undefined,
  twitterTitle: () => seo.value?.twitterTitle || seo.value?.ogTitle || seo.value?.metaTitle || undefined,
  twitterDescription: () => seo.value?.twitterDescription || seo.value?.ogDescription || seo.value?.metaDescription || undefined,
  twitterImage: () => mediaUrl(seo.value?.twitterImage) || mediaUrl(seo.value?.shareImage) || undefined,
})

useHead({
  link: () => (seo.value?.canonicalUrl
    ? [{ rel: 'canonical', href: seo.value.canonicalUrl }]
    : []),
})

const containerRef = ref(null)

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

watch(slides, () => {
  nextTick(() => {
    if (containerRef.value) {
      swiper.reInitialize()
      nextTick(() => initFancybox())
    }
  })
})

onUnmounted(() => {
  Fancybox.unbind('[data-fancybox="license-docs"]')
  Fancybox.close()
})
</script>
