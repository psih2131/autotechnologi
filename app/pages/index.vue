<template>
  <main class="home-page">
    <HomeHero
      v-if="hero"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :stats="hero.stats"
      :avatars="hero.avatars"
      :background-image="hero.backgroundImage"
    />

    <HomeCategories
      v-if="categoriesSection"
      :featured="categoriesSection.featured"
      :categories="categoriesSection.categories"
    />

    <AboutSupport
      v-if="bannerSection"
      :title="bannerSection.title"
      :text="bannerSection.text"
      :button-text="bannerSection.buttonText"
      :button-link="bannerSection.buttonLink"
      :image="bannerSection.image"
    />

    <HomePopularPrograms
      v-if="popularPrograms"
      :title="popularPrograms.title"
      :courses="popularPrograms.courses"
    />

    <HomeStartHelp
      v-if="startSection"
      :title="startSection.title"
      :box1-title="startSection.box1Title"
      :box1-subtitle="startSection.box1Subtitle"
      :box1-button-text="startSection.box1ButtonText"
      :box2-title="startSection.box2Title"
      :box2-text="startSection.box2Text"
      :box2-button-title="startSection.box2ButtonTitle"
      :box2-file-url="startSection.box2FileUrl"
    />

    <AboutWhy v-if="whySection" v-bind="whySection" />
    <AboutVideo v-if="videoSrc" :src="videoSrc" />

    <HomeFaq
      v-if="faqSection"
      :title="faqSection.title"
      :items="faqSection.items"
    />

    <AccreditationBanner
      v-if="downBanner"
      :title="downBanner.title || ''"
      :description="downBanner.text || ''"
      :image="mediaUrl(downBanner.image)"
    />

    <HomeNews
      v-if="newsSection"
      :title="newsSection.title"
      :items="newsSection.items"
    />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const mediaUrl = useStrapiMedia()
const formatDate = useFormatDate()

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

function formatDuration(hours) {
  if (hours == null || hours === '') return ''
  const value = Number(hours)
  if (Number.isNaN(value)) return ''
  const n = Math.abs(Math.trunc(value))
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

function formatCoursesCount(count) {
  const n = Number(count) || 0
  const mod10 = n % 10
  const mod100 = n % 100
  let word = 'курсов'
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) word = 'курс'
    else if (mod10 >= 2 && mod10 <= 4) word = 'курса'
  }
  return `${n} ${word}`
}

function mapProgram(item) {
  return {
    to: item.slug ? `/programs/${item.slug}` : '/programs',
    category: item.programs_type?.title || item.programs_category?.title || '',
    title: item.title || '',
    description: item.short_description || '',
    duration: formatDuration(item.duration_of_study_hours),
    format: item.programs_training_format?.title || '',
    price: formatPrice(item.price_rub),
    hit: Boolean(item.best_seller),
  }
}

function mapCategory(item) {
  if (!item?.slug && !item?.title) return null
  const programsCount = Array.isArray(item.programs) ? item.programs.length : 0
  return {
    title: item.title || '',
    subtitle: item.subtitle || '',
    count: formatCoursesCount(programsCount),
    to: item.slug ? `/programs/categories/${item.slug}` : '/programs',
  }
}

function flattenCategories(wrappers = []) {
  return wrappers
    .flatMap((wrapper) => wrapper?.programs_categories || [])
    .map(mapCategory)
    .filter(Boolean)
}

const query = new URLSearchParams({
  'populate[hero_section][populate][hero_stats_items]': 'true',
  'populate[hero_section][populate][card_images]': 'true',
  'populate[hero_section][populate][background_image]': 'true',
  'populate[programs_categories_section][populate][most_popular_category][populate][programs_categories][populate]': 'programs',
  'populate[programs_categories_section][populate][other_popular_categories][populate][programs_categories][populate]': 'programs',
  'populate[banner_section][populate]': 'image',
  'populate[popular_programs_section][populate][programs][populate][programs_type][populate]': 'icon',
  'populate[popular_programs_section][populate][programs][populate][programs_training_format]': 'true',
  'populate[popular_programs_section][populate][programs][populate][programs_category]': 'true',
  'populate[start_section][populate]': 'box_2_file_for_download',
  'populate[why_we_section][populate]': 'box_1_images',
  'populate[faq_section][populate]': 'questions_list',
  'populate[down_banner_section][populate]': 'image',
  'populate[news_section][populate][news][populate]': 'post_image',
  'populate[Seo][populate][shareImage]': 'true',
  'populate[Seo][populate][twitterImage]': 'true',
}).toString()

const { data } = await useAsyncData('page-home', () =>
  $fetch(`/api/page-home?${query}`, { baseURL: config.public.apiUrl }).catch(() => null),
)

const page = computed(() => data.value?.data ?? {})

const hero = computed(() => {
  const section = page.value.hero_section
  if (!section) return null
  const stats = (section.hero_stats_items || [])
    .filter((item) => item?.title || item?.subtitle)
    .map((item) => ({
      value: item.title || '',
      label: item.subtitle || '',
    }))
  const avatars = (section.card_images || []).map((item) => mediaUrl(item)).filter(Boolean)
  if (!section.title && !section.subtitle && !stats.length && !avatars.length && !section.background_image) {
    return null
  }
  return {
    title: section.title || '',
    subtitle: section.subtitle || '',
    stats,
    avatars,
    backgroundImage: mediaUrl(section.background_image) || '',
  }
})

const categoriesSection = computed(() => {
  const section = page.value.programs_categories_section
  if (!section) return null
  const featuredList = flattenCategories(
    section.most_popular_category ? [section.most_popular_category] : [],
  )
  const featured = featuredList[0] || null
  const categories = flattenCategories(section.other_popular_categories || [])
  if (!featured && !categories.length) return null
  return { featured, categories }
})

const bannerSection = computed(() => {
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

const popularPrograms = computed(() => {
  const section = page.value.popular_programs_section
  if (!section) return null
  const courses = (section.programs || []).filter((item) => item?.title).map(mapProgram)
  if (!section.title_section && !courses.length) return null
  return {
    title: section.title_section || '',
    courses,
  }
})

const startSection = computed(() => {
  const section = page.value.start_section
  if (!section) return null
  if (
    !section.title_section
    && !section.box_1_title
    && !section.box_1_subtitle
    && !section.box_2_title
    && !section.box_2_text
  ) {
    return null
  }
  return {
    title: section.title_section || '',
    box1Title: section.box_1_title || '',
    box1Subtitle: section.box_1_subtitle || '',
    box1ButtonText: section.box_1_button_text || '',
    box2Title: section.box_2_title || '',
    box2Text: section.box_2_text || '',
    box2ButtonTitle: section.box_2_button_title || '',
    box2FileUrl: mediaUrl(section.box_2_file_for_download) || '',
  }
})

const whySection = computed(() => {
  const section = page.value.why_we_section
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

const videoSrc = computed(() => toYoutubeEmbed(page.value.Video_section))

const faqSection = computed(() => {
  const section = page.value.faq_section
  if (!section) return null
  const items = (section.questions_list || [])
    .filter((item) => item?.title || item?.text)
    .map((item) => ({
      question: item.title || '',
      answer: item.text || '',
    }))
  if (!section.section_title && !items.length) return null
  return {
    title: section.section_title || '',
    items,
  }
})

const downBanner = computed(() => {
  const section = page.value.down_banner_section
  if (!section) return null
  if (!section.title && !section.text && !section.image) return null
  return section
})

const newsSection = computed(() => {
  const section = page.value.news_section
  if (!section) return null
  const items = (section.news || [])
    .filter((item) => item?.slug && item?.post_title)
    .map((item) => ({
      to: `/news/${item.slug}`,
      image: mediaUrl(item.post_image) || '',
      date: formatDate(item.publishedAt),
      title: item.post_title || '',
      excerpt: item.short_description || '',
    }))
    .filter((item) => item.image)
  if (!section.title_section && !items.length) return null
  return {
    title: section.title_section || '',
    items,
  }
})

const seo = computed(() => page.value.Seo ?? null)
useSeoFromStrapi(seo, mediaUrl)

useHead({
  title: () => seo.value?.metaTitle || 'Автотехнологии — дистанционное обучение',
})
</script>
