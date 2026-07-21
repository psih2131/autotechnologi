<template>
  <main class="docs-page">
    <div class="container">
      <h1 v-if="doc?.title" class="docs-page__title">{{ doc.title }}</h1>
      <div
        v-if="doc?.contentHtml"
        class="docs-page__content editor-text"
        v-html="doc.contentHtml"
      ></div>
    </div>
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const mediaUrl = useStrapiMedia()
const toHtml = useRichText()

const slug = computed(() => String(route.params.id || ''))

const { data } = await useAsyncData(
  () => `doc-${slug.value}`,
  async () => {
    if (!slug.value) return null

    const params = new URLSearchParams({
      'filters[slug][$eq]': slug.value,
      'populate[Seo][populate][shareImage]': 'true',
      'populate[Seo][populate][twitterImage]': 'true',
      'pagination[pageSize]': '1',
    })

    const response = await $fetch(`/api/docs?${params}`, {
      baseURL: config.public.apiUrl,
    }).catch(() => null)

    return response?.data?.[0] || null
  },
  { watch: [slug] },
)

const doc = computed(() => {
  const item = data.value
  if (!item?.slug) return null
  return {
    title: item.title || '',
    contentHtml: toHtml(item.text),
    seo: item.Seo || null,
  }
})

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Документ не найден' })
}

const seo = computed(() => doc.value?.seo ?? null)
useSeoFromStrapi(seo, mediaUrl)

useHead({
  title: () => seo.value?.metaTitle || doc.value?.title || undefined,
})
</script>
