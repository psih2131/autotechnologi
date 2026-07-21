<template>
  <main class="about-page">
    <AboutHero
      v-if="hero"
      :title="hero.title"
      :description="hero.description"
      :image-1="hero.image1"
      :image-2="hero.image2"
    />

    <ProgramAboutInfo
      v-if="aboutSection"
      :title="aboutSection.title"
      :description="aboutSection.description"
      :stats="aboutSection.stats"
    />
    <ProgramGallery v-if="galleryPhotos.length" :photos="galleryPhotos" />
    <AboutMap
      v-if="offices"
      :title="offices.title"
      :branches="offices.branches"
    />
    <AboutWhy v-if="whySection" v-bind="whySection" />
    <AboutVideo v-if="videoSrc" :src="videoSrc" />
    <AboutRegulation
      v-if="regulation"
      :title="regulation.title"
      :subtitle="regulation.subtitle"
      :items="regulation.items"
      :licence-title="regulation.licenceTitle"
      :licence-lead="regulation.licenceLead"
      :licence-text="regulation.licenceText"
      :licence-note="regulation.licenceNote"
      :slides="regulation.slides"
    />
    <AboutSupport
      v-if="supportBanner"
      :title="supportBanner.title"
      :text="supportBanner.text"
      :button-text="supportBanner.buttonText"
      :button-link="supportBanner.buttonLink"
      :image="supportBanner.image"
    />
    <ProgramLogosSlider v-if="partnerLogos.length" :logos="partnerLogos" />
    <ProgramReviews
      v-if="reviewVideos.length || reviewTexts.length"
      :videos="reviewVideos"
      :reviews="reviewTexts"
    />
    <AboutLetters
      v-if="letters"
      :title="letters.title"
      :images="letters.images"
    />

    <AccreditationBanner
      v-if="downBanner"
      :title="downBanner.title || ''"
      :description="downBanner.text || ''"
      :image="mediaUrl(downBanner.image)"
    />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const mediaUrl = useStrapiMedia()

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

const query = new URLSearchParams({
  'populate[hero_section][populate][image_1]': 'true',
  'populate[hero_section][populate][image_2]': 'true',
  'populate[About_company_section][populate]': 'about_item',
  'populate[gallery_section]': 'true',
  'populate[Offices_section]': 'true',
  'populate[Why_we_section][populate]': 'box_1_images',
  'populate[regulation_section][populate][regulation_items][populate]': 'image',
  'populate[licence_section][populate]': 'gallery',
  'populate[banner_section][populate]': 'image',
  'populate[reviews_video_youtybes]': 'true',
  'populate[reviews_texts][populate]': 'photo',
  'populate[letters_section][populate]': 'gallery',
  'populate[down_banner_section][populate]': 'image',
  'populate[Seo][populate][shareImage]': 'true',
  'populate[Seo][populate][twitterImage]': 'true',
}).toString()

const { data } = await useAsyncData('page-about', () =>
  $fetch(`/api/page-about?${query}`, { baseURL: config.public.apiUrl }).catch(() => null),
)

const { data: partnersData } = await useAsyncData('partners-component', async () => {
  const params = new URLSearchParams({
    'populate[logos]': 'true',
  })

  const response = await $fetch(`/api/partners-component?${params}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null)

  return response?.data || null
})

const page = computed(() => data.value?.data ?? {})

const hero = computed(() => {
  const section = page.value.hero_section
  if (!section) return null
  if (!section.title && !section.subtitle && !section.image_1 && !section.image_2) return null
  return {
    title: section.title || '',
    description: section.subtitle || '',
    image1: mediaUrl(section.image_1) || '',
    image2: mediaUrl(section.image_2) || '',
  }
})

const aboutSection = computed(() => {
  const section = page.value.About_company_section
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
  (page.value.gallery_section || [])
    .map((item) => mediaUrl(item))
    .filter(Boolean),
)

const offices = computed(() => {
  const section = page.value.Offices_section
  if (!section) return null
  const branches = [
    { city: section.office_1_title || '', address: section.office_1_adres || '' },
    { city: section.office_2_title || '', address: section.office_2_adres || '' },
    { city: section.office_3_title || '', address: section.office_3_adres || '' },
  ].filter((item) => item.city || item.address)
  if (!section.title && !branches.length) return null
  return {
    title: section.title || '',
    branches,
  }
})

const whySection = computed(() => {
  const section = page.value.Why_we_section
  if (!section) return null
  return {
    title: section.title_section || '',
    box1Title: section.box_1_title || '',
    box1Subtitle: section.box_1_subtitle || '',
    box1Text: section.box_1_text || '',
    box1Images: (section.box_1_images || []).map((item) => mediaUrl(item)).filter(Boolean),
    box2Title: section.box_2_titlr || '',
    box2Text: section.box_2_subtitle || '',
    box3Title: section.box_3_title || '',
    box3Text: section.box_3_text || '',
    box4Title: section.box_4_title || '',
    box4Text: section.box_4_text || '',
    box5Title: section.box_5_title || '',
    box5Text: section.box_5_text || '',
  }
})

const videoSrc = computed(() => toYoutubeEmbed(page.value.video_section))

const regulation = computed(() => {
  const reg = page.value.regulation_section
  const licence = page.value.licence_section
  if (!reg && !licence) return null

  const items = (reg?.regulation_items || [])
    .filter((item) => item?.image || item?.title)
    .map((item) => ({
      image: mediaUrl(item.image) || '',
      label: item.title || '',
    }))

  const slides = (licence?.gallery || [])
    .map((item) => ({
      image: mediaUrl(item) || '',
      title: '',
    }))
    .filter((item) => item.image)

  if (
    !reg?.title_section
    && !reg?.subtitle
    && !items.length
    && !licence?.title
    && !licence?.subtitle
    && !licence?.text
    && !licence?.down_text
    && !slides.length
  ) {
    return null
  }

  return {
    title: reg?.title_section || '',
    subtitle: reg?.subtitle || '',
    items,
    licenceTitle: licence?.title || '',
    licenceLead: licence?.subtitle || '',
    licenceText: licence?.text || '',
    licenceNote: licence?.down_text || '',
    slides,
  }
})

const supportBanner = computed(() => {
  const section = page.value.banner_section
  if (!section) return null
  if (!section.title && !section.texxt && !section.image) return null
  return {
    title: section.title || '',
    text: section.texxt || '',
    buttonText: section.button_text || 'Подробнее об услуге',
    buttonLink: section.button_link || '',
    image: mediaUrl(section.image) || '',
  }
})

const partnerLogos = computed(() =>
  (partnersData.value?.logos || [])
    .map((item) => mediaUrl(item))
    .filter(Boolean),
)

const reviewVideos = computed(() =>
  (page.value.reviews_video_youtybes || [])
    .map((item) => ({
      src: toYoutubeEmbed(item.video_code),
      title: item.title || 'Видеоотзыв',
    }))
    .filter((item) => item.src),
)

const reviewTexts = computed(() =>
  (page.value.reviews_texts || [])
    .filter((item) => item?.text)
    .map((item) => ({
      text: item.text || '',
      name: item.autor_name || '',
      city: item.location || '',
      avatar: mediaUrl(item.photo) || '',
    })),
)

const letters = computed(() => {
  const section = page.value.letters_section
  if (!section) return null
  const images = (section.gallery || []).map((item) => mediaUrl(item)).filter(Boolean)
  if (!section.title_section && !images.length) return null
  return {
    title: section.title_section || '',
    images,
  }
})

const downBanner = computed(() => page.value.down_banner_section ?? null)

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
</script>
