<template>
  <main class="auto-accreditation">
    <AccreditationDocuments
      v-if="hasDocumentsSection"
      :title="pageTitle"
      :subtitle="pageSubtitle"
      :documents="documents"
    />

    <AccreditationBanner
      v-if="banner"
      :title="banner.title || ''"
      :description="banner.text || ''"
      :image="mediaUrl(banner.image)"
    />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const mediaUrl = useStrapiMedia()

const query = new URLSearchParams({
  'populate[docs_list][populate]': 'file',
  'populate[banner_section][populate]': 'image',
  'populate[Seo][populate][shareImage]': 'true',
  'populate[Seo][populate][twitterImage]': 'true',
}).toString()

const { data } = await useAsyncData('page-accreditation', () =>
  $fetch(`/api/page-accreditation?${query}`, { baseURL: config.public.apiUrl }).catch(() => null),
)

const page = computed(() => data.value?.data ?? {})

const pageTitle = computed(() => page.value.title || '')
const pageSubtitle = computed(() => page.value.Subtitle || '')

const documents = computed(() => {
  if (!page.value.docs_list?.length) return []
  return page.value.docs_list
    .map((item) => {
      const files = Array.isArray(item.file) ? item.file : (item.file ? [item.file] : [])
      const imageFile = files.find((f) => f?.mime?.startsWith('image/')) || files[0]
      return {
        title: item.title || '',
        image: mediaUrl(imageFile),
      }
    })
    .filter((doc) => doc.image)
})

const hasDocumentsSection = computed(() =>
  Boolean(pageTitle.value || pageSubtitle.value || documents.value.length),
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
</script>
