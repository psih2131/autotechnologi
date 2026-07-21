<template>
  <main class="program-page">
    <ProgramHero
      :title="program.title"
      :description="program.description"
      :category-title="program.categoryTitle"
      :category-slug="program.categorySlug"
      :type-title="program.typeTitle"
      :duration="program.duration"
      :format="program.format"
      :price="program.price"
      :payment-in-shares="program.paymentInShares"
      :hero-img-left="program.heroImgLeft"
      :hero-img-right="program.heroImgRight"
    />

    <ProgramWho v-if="whoItems.length" :items="whoItems" />
    <ProgramCurriculum v-if="curriculumBlocks.length" :blocks="curriculumBlocks" />
    <ProgramDocs
      v-if="docsSection"
      :title="docsSection.title"
      :intro="docsSection.intro"
      :image="docsSection.image"
      :doc-name="docsSection.docName"
      :doc-url="docsSection.docUrl"
    />

    <AccreditationBanner
      v-if="banner"
      :title="banner.title || ''"
      :description="banner.text || ''"
      :image="mediaUrl(banner.image)"
    />

    <ProgramRelated
      v-if="relatedCourses.length"
      :title="relatedTitle"
      :courses="relatedCourses"
    />
    <ProgramAboutInfo
      v-if="aboutSection"
      :title="aboutSection.title"
      :description="aboutSection.description"
      :stats="aboutSection.stats"
    />
    <ProgramGallery v-if="galleryPhotos.length" :photos="galleryPhotos" />
    <ProgramLogosSlider v-if="partnerLogos.length" :logos="partnerLogos" />
    <ProgramReviews
      v-if="reviewVideos.length || reviewTexts.length"
      :videos="reviewVideos"
      :reviews="reviewTexts"
    />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const mediaUrl = useStrapiMedia()

const slug = computed(() => String(route.params.id || ''))

function formatDuration(hours) {
  if (hours == null || hours === '') return ''
  const value = Number(hours)
  if (Number.isNaN(value)) return ''
  const n = Math.floor(value)
  const mod10 = n % 10
  const mod100 = n % 100
  let word = 'часов'
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) word = 'час'
    else if (mod10 >= 2 && mod10 <= 4) word = 'часа'
  }
  return `${value} ${word}`
}

function formatPrice(price) {
  if (price == null || price === '') return ''
  return `${Number(price).toLocaleString('ru-RU')} ₽`
}

function mapCardProgram(item) {
  return {
    to: item.slug ? `/programs/${item.slug}` : '/programs',
    category: item.programs_type?.title || '',
    categoryIcon: mediaUrl(item.programs_type?.icon) || '',
    title: item.title || '',
    description: item.short_description || '',
    duration: formatDuration(item.duration_of_study_hours),
    format: item.programs_training_format?.title || '',
    price: formatPrice(item.price_rub),
    registrationOpen: item.registration_is_open !== false,
    hit: Boolean(item.best_seller),
  }
}

function toYoutubeEmbed(code) {
  if (!code) return ''
  const value = String(code).trim()
  if (value.includes('/embed/')) {
    const match = value.match(/https?:\/\/[^\s"']+/)
    return match ? match[0] : value
  }
  const idMatch = value.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{11})/)
  if (idMatch) return `https://www.youtube.com/embed/${idMatch[1]}`
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return `https://www.youtube.com/embed/${value}`
  return value
}

const { data } = await useAsyncData(
  () => `program-${slug.value}`,
  async () => {
    if (!slug.value) return null

    const params = new URLSearchParams({
      'filters[slug][$eq]': slug.value,
      'populate[programs_type][populate]': 'icon',
      'populate[programs_training_format]': 'true',
      'populate[programs_category]': 'true',
      'populate[hero_img_1]': 'true',
      'populate[hero_img_2]': 'true',
      'populate[for_who_section][populate]': 'image',
      'populate[Training_program_staps]': 'true',
      'populate[Document_section][populate][doc_file]': 'true',
      'populate[Document_section][populate][doc_preview_image]': 'true',
      'populate[banner_section][populate]': 'image',
      'populate[Recommended_programs_section][populate][programs][populate][programs_type][populate]': 'icon',
      'populate[Recommended_programs_section][populate][programs][populate][programs_training_format]': 'true',
      'populate[About_company_section][populate]': 'about_item',
      'populate[gallery_section]': 'true',
      'populate[reviews_video_youtybes]': 'true',
      'populate[reviews_texts][populate]': 'photo',
      'populate[Seo][populate][shareImage]': 'true',
      'populate[Seo][populate][twitterImage]': 'true',
    })

    const response = await $fetch(`/api/programs?${params}`, {
      baseURL: config.public.apiUrl,
    }).catch(() => null)

    return response?.data?.[0] || null
  },
  { watch: [slug] },
)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Программа не найдена' })
}

const { data: partnersData } = await useAsyncData('partners-component', async () => {
  const params = new URLSearchParams({
    'populate[logos]': 'true',
  })

  const response = await $fetch(`/api/partners-component?${params}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null)

  return response?.data || null
})

const program = computed(() => {
  const item = data.value || {}
  return {
    title: item.title || '',
    description: item.long_description_for_hero_section || '',
    categoryTitle: item.programs_category?.title || '',
    categorySlug: item.programs_category?.slug || '',
    typeTitle: item.programs_type?.title || '',
    duration: formatDuration(item.duration_of_study_hours),
    format: item.programs_training_format?.title || '',
    price: formatPrice(item.price_rub),
    paymentInShares: Boolean(item.payment_in_shares_available),
    heroImgLeft: mediaUrl(item.hero_img_1) || '',
    heroImgRight: mediaUrl(item.hero_img_2) || '',
  }
})

const whoItems = computed(() =>
  (data.value?.for_who_section || [])
    .filter((item) => item?.title || item?.image)
    .map((item) => ({
      text: item.title || '',
      image: mediaUrl(item.image) || '',
    })),
)

const curriculumBlocks = computed(() =>
  (data.value?.Training_program_staps || []).map((item, idx) => ({
    label: `Блок ${idx + 1}`,
    title: item.title || '',
    text: item.subtitle || '',
    white: idx % 3 === 1,
  })),
)

const docsSection = computed(() => {
  const section = data.value?.Document_section
  if (!section) return null
  if (!section.title && !section.doc_name && !section.doc_file && !section.doc_preview_image) return null
  return {
    title: section.title || '',
    intro: section.subtitle || '',
    image: mediaUrl(section.doc_preview_image) || '',
    docName: section.doc_name || '',
    docUrl: mediaUrl(section.doc_file) || '',
  }
})

const banner = computed(() => data.value?.banner_section || null)

const relatedTitle = computed(() =>
  data.value?.Recommended_programs_section?.section_title || 'Другие курсы по направлению',
)

const relatedCourses = computed(() =>
  (data.value?.Recommended_programs_section?.programs || [])
    .filter((item) => item?.slug && item?.title)
    .map(mapCardProgram),
)

const aboutSection = computed(() => {
  const section = data.value?.About_company_section
  if (!section) return null
  const stats = (section.about_item || [])
    .filter((item) => item?.title || item?.subtitle)
    .map((item) => ({
      value: item.title || '',
      label: item.subtitle || '',
    }))
  if (!section.title && !section.subtitle && !stats.length) return null
  return {
    title: section.title || '',
    description: section.subtitle || '',
    stats,
  }
})

const galleryPhotos = computed(() =>
  (data.value?.gallery_section || [])
    .map((item) => mediaUrl(item))
    .filter(Boolean),
)

const partnerLogos = computed(() =>
  (partnersData.value?.logos || [])
    .map((item) => mediaUrl(item))
    .filter(Boolean),
)

const reviewVideos = computed(() =>
  (data.value?.reviews_video_youtybes || [])
    .map((item) => ({
      src: toYoutubeEmbed(item.video_code),
      title: item.title || 'Видеоотзыв',
    }))
    .filter((item) => item.src),
)

const reviewTexts = computed(() =>
  (data.value?.reviews_texts || [])
    .filter((item) => item?.text)
    .map((item) => ({
      text: item.text || '',
      name: item.autor_name || '',
      city: item.location || '',
      avatar: mediaUrl(item.photo) || '',
    })),
)

const seo = computed(() => data.value?.Seo ?? null)

useSeoMeta({
  title: () => seo.value?.metaTitle || program.value.title || undefined,
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
</script>
