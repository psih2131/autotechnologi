<template>
  <main class="news-page">
    <section class="news-section">
      <div class="container">
        <nav class="news-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="news-section__breadcrumbs-sep">/</span>
          <span>Новости</span>
        </nav>

        <div class="news-section__head">
          <h1 class="news-section__title">Новости</h1>

          <div class="news-section__controls">
            <form class="news-section__search-row" @submit.prevent="applySearch">
              <label class="news-section__search">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.5" cy="6.5" r="5" stroke="#7E7F81" stroke-width="2"/>
                  <path d="M10 10L14 14" stroke="#7E7F81" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <input
                  v-model="searchInput"
                  type="text"
                  class="news-section__search-input"
                  placeholder="Поиск по новостям"
                >
              </label>
              <button type="submit" class="news-section__search-btn">Поиск</button>
            </form>

            <div class="news-section__sort" ref="sortRoot">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6 12H18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M10 17H14" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div class="news-section__sort-select" :class="{ 'news-section__sort-select--open': sortOpen }">
                <button
                  type="button"
                  class="news-section__sort-trigger"
                  @click="sortOpen = !sortOpen"
                >
                  <span>{{ currentSortLabel }}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <ul v-if="sortOpen" class="news-section__sort-menu">
                  <li v-for="option in sortOptions" :key="option.value">
                    <button
                      type="button"
                      class="news-section__sort-option"
                      :class="{ 'news-section__sort-option--active': sortKey === option.value }"
                      @click="selectSort(option.value)"
                    >
                      {{ option.label }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div v-if="posts.length" class="news-section__grid">
          <article v-for="post in posts" :key="post.slug" class="news-card">
            <NuxtLink :to="`/news/${post.slug}`" class="news-card__link">
              <div v-if="post.image" class="news-card__image-wrap">
                <img :src="post.image" :alt="post.title" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time v-if="post.date" class="news-card__date">{{ post.date }}</time>
                <h2 v-if="post.title" class="news-card__title">{{ post.title }}</h2>
                <p v-if="post.excerpt" class="news-card__excerpt">{{ post.excerpt }}</p>
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

        <nav v-if="pageCount > 1" class="news-section__pagination">
          <div class="news-section__pagination-numbers">
            <button
              v-for="(item, i) in paginationItems"
              :key="`page-${i}-${item}`"
              type="button"
              class="news-section__pagination-num"
              :class="{ 'news-section__pagination-num--active': item === currentPage }"
              :disabled="item === '...'"
              @click="item !== '...' && goToPage(item)"
            >
              {{ item }}
            </button>
          </div>
          <button
            type="button"
            class="news-section__pagination-next"
            aria-label="Следующая страница"
            :disabled="currentPage >= pageCount"
            @click="goToPage(currentPage + 1)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </nav>
      </div>
    </section>
  </main>
</template>

<script setup>
const PAGE_SIZE = 2

const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const mediaUrl = useStrapiMedia()
const formatDate = useFormatDate()

const sortOptions = [
  { value: 'default', label: 'По умолчанию', sort: 'publishedAt:desc' },
  { value: 'newest', label: 'Сначала новые', sort: 'publishedAt:desc' },
  { value: 'oldest', label: 'Сначала старые', sort: 'publishedAt:asc' },
  { value: 'title_asc', label: 'По названию (А–Я)', sort: 'post_title:asc' },
  { value: 'title_desc', label: 'По названию (Я–А)', sort: 'post_title:desc' },
]

const currentPage = computed(() => Math.max(1, Number(route.query.page) || 1))
const searchQuery = computed(() => String(route.query.q || '').trim())
const sortKey = computed(() => {
  const value = String(route.query.sort || 'default')
  return sortOptions.some((o) => o.value === value) ? value : 'default'
})
const currentSortLabel = computed(() =>
  sortOptions.find((o) => o.value === sortKey.value)?.label || 'По умолчанию',
)

const searchInput = ref(searchQuery.value)
const sortOpen = ref(false)
const sortRoot = ref(null)

watch(searchQuery, (value) => {
  searchInput.value = value
})

const { data } = await useAsyncData(
  'news-list',
  () => {
    const params = new URLSearchParams({
      'pagination[page]': String(currentPage.value),
      'pagination[pageSize]': String(PAGE_SIZE),
      'populate[post_image]': 'true',
      sort: sortOptions.find((o) => o.value === sortKey.value)?.sort || 'publishedAt:desc',
    })

    if (searchQuery.value) {
      params.set('filters[$or][0][post_title][$containsi]', searchQuery.value)
      params.set('filters[$or][1][short_description][$containsi]', searchQuery.value)
    }

    return $fetch(`/api/news?${params}`, { baseURL: config.public.apiUrl }).catch(() => null)
  },
  { watch: [currentPage, searchQuery, sortKey] },
)

const posts = computed(() => {
  if (!data.value?.data?.length) return []
  return data.value.data
    .filter((item) => item.slug)
    .map((item) => ({
      slug: item.slug,
      title: item.post_title || '',
      excerpt: item.short_description || '',
      date: formatDate(item.publishedAt),
      image: mediaUrl(item.post_image),
    }))
})

const pageCount = computed(() => data.value?.meta?.pagination?.pageCount || 0)

const paginationItems = computed(() => {
  const total = pageCount.value
  const current = currentPage.value
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const items = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  if (start > 2) items.push('...')
  for (let i = start; i <= end; i += 1) items.push(i)
  if (end < total - 1) items.push('...')
  items.push(total)
  return items
})

function applySearch() {
  const next = {
    ...route.query,
    q: searchInput.value.trim() || undefined,
  }
  delete next.page
  if (!next.q) delete next.q
  return router.push({ query: next })
}

function selectSort(value) {
  sortOpen.value = false
  const next = { ...route.query }
  delete next.page
  if (value === 'default') delete next.sort
  else next.sort = value
  return router.push({ query: next })
}

function goToPage(page) {
  if (page < 1 || page > pageCount.value || page === currentPage.value) return
  const next = { ...route.query }
  if (page === 1) delete next.page
  else next.page = page
  return router.push({ query: next })
}

function onClickOutside(event) {
  if (!sortRoot.value?.contains(event.target)) sortOpen.value = false
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))

useHead({
  title: 'Новости — Автотехнологии',
})
</script>
