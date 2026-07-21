<template>
  <main class="news-post-page">
    <section v-if="post" class="news-post-section">
      <div class="container">
        <nav class="news-post-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="news-post-section__breadcrumbs-sep">/</span>
          <NuxtLink to="/news">Новости</NuxtLink>
          <span v-if="post.title" class="news-post-section__breadcrumbs-sep">/</span>
          <span v-if="post.title">{{ post.title }}</span>
        </nav>

        <div class="news-post-section__layout">
          <div class="news-post-section__main">
            <NuxtLink to="/news" class="news-post-section__back">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L1 5.5L5 10" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 5.5H14" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>Назад</span>
            </NuxtLink>

            <h1 v-if="post.title" class="news-post-section__title">{{ post.title }}</h1>

            <div v-if="post.image" class="news-post-section__image-wrap">
              <img :src="post.image" :alt="post.title" class="news-post-section__image">
            </div>

            <div
              v-if="post.contentHtml"
              class="news-post-section__content"
              v-html="post.contentHtml"
            ></div>
          </div>

          <aside v-if="related.length" class="news-post-section__sidebar">
            <h2 class="news-post-section__sidebar-title">Смотрите также</h2>
            <div class="news-post-section__sidebar-line"></div>

            <div class="news-post-section__related">
              <article
                v-for="item in related"
                :key="item.slug"
                class="news-card news-card--sidebar"
              >
                <NuxtLink :to="`/news/${item.slug}`" class="news-card__link">
                  <div v-if="item.image" class="news-card__image-wrap">
                    <img :src="item.image" :alt="item.title" class="news-card__image">
                  </div>
                  <div class="news-card__body">
                    <time v-if="item.date" class="news-card__date">{{ item.date }}</time>
                    <h3 v-if="item.title" class="news-card__title">{{ item.title }}</h3>
                    <p v-if="item.excerpt" class="news-card__excerpt">{{ item.excerpt }}</p>
                  </div>
                  <div class="news-card__footer">
                    <span class="news-card__more">Подробнее</span>
                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                      <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </NuxtLink>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const mediaUrl = useStrapiMedia()
const formatDate = useFormatDate()
const toHtml = useRichText()

const slug = computed(() => String(route.params.slug || ''))

const { data } = await useAsyncData(
  () => `news-${slug.value}`,
  async () => {
    if (!slug.value) return null

    const params = new URLSearchParams({
      'filters[slug][$eq]': slug.value,
      'populate[post_image]': 'true',
      'populate[recomends_news][populate]': 'post_image',
      'populate[Seo][populate][shareImage]': 'true',
      'populate[Seo][populate][twitterImage]': 'true',
    })

    const response = await $fetch(`/api/news?${params}`, {
      baseURL: config.public.apiUrl,
    }).catch(() => null)

    return response?.data?.[0] || null
  },
  { watch: [slug] },
)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Новость не найдена' })
}

const post = computed(() => {
  const item = data.value
  if (!item) return null
  return {
    title: item.post_title || '',
    image: mediaUrl(item.post_image),
    contentHtml: toHtml(item.post_text),
  }
})

const related = computed(() => {
  const items = data.value?.recomends_news
  if (!items?.length) return []
  return items
    .filter((item) => item.slug && item.slug !== slug.value)
    .map((item) => ({
      slug: item.slug,
      title: item.post_title || '',
      excerpt: item.short_description || '',
      date: formatDate(item.publishedAt),
      image: mediaUrl(item.post_image),
    }))
})

const seo = computed(() => data.value?.Seo ?? null)
useSeoFromStrapi(seo, mediaUrl)

useHead({
  title: () => seo.value?.metaTitle || post.value?.title || undefined,
})
</script>
