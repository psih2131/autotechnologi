<template>
  <main class="contacts-page">
    <section class="contacts-section">
      <div class="container">
        <nav class="contacts-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="contacts-section__breadcrumbs-sep">/</span>
          <span>Контакты</span>
        </nav>

        <h1 class="contacts-section__title">Контакты</h1>

        <div class="contacts-section__grid">
          <div v-if="salesDepartments.length" class="contacts-section__col">
            <h2 class="contacts-section__col-title">Отдел продаж</h2>
            <ContactsItem
              v-for="(item, i) in salesDepartments"
              :key="`sales-${i}`"
              :title="item.title"
              :link="item.link"
              :icon="item.icon"
            />
          </div>

          <div v-if="educationalDepartment.length" class="contacts-section__col">
            <h2 class="contacts-section__col-title">Учебно-<br>методический отдел</h2>
            <ContactsItem
              v-for="(item, i) in educationalDepartment"
              :key="`edu-${i}`"
              :title="item.title"
              :link="item.link"
              :icon="item.icon"
            />
          </div>

          <div v-if="representativeOffices.length" class="contacts-section__col contacts-section__col--offices">
            <h2 class="contacts-section__col-title">Представительства</h2>
            <ContactsItem
              v-for="(item, i) in representativeOffices"
              :key="`office-${i}`"
              :title="item.title"
              :link="item.link"
              :icon="item.icon"
            />
          </div>

          <div v-if="socials.length" class="contacts-section__socials">
            <a
              v-for="(item, i) in socials"
              :key="`social-${i}`"
              :href="item.link || undefined"
              class="contacts-section__social-link"
              :aria-label="item.title"
              target="_blank"
              rel="noopener"
            >
              <img v-if="item.icon" :src="item.icon" :alt="item.title || ''">
            </a>
          </div>
        </div>

        <div class="contacts-section__map" aria-hidden="true"></div>
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
const config = useRuntimeConfig()
const mediaUrl = useStrapiMedia()

const query = new URLSearchParams({
  'populate[sales_departments][populate]': 'icon',
  'populate[educational_department][populate]': 'icon',
  'populate[representative_offices][populate]': 'icon',
  'populate[socials_media][populate]': 'icon',
  'populate[banner_section][populate]': 'image',
  'populate[Seo][populate][shareImage]': 'true',
  'populate[Seo][populate][twitterImage]': 'true',
}).toString()

const { data } = await useAsyncData('page-contact', () =>
  $fetch(`/api/page-contact?${query}`, { baseURL: config.public.apiUrl }).catch(() => null),
)

const page = computed(() => data.value?.data ?? {})

function normalizeItems(items) {
  if (!items?.length) return []
  return items.map((item) => ({
    title: item.title || '',
    link: item.link || '',
    icon: mediaUrl(item.icon),
  }))
}

const salesDepartments = computed(() => normalizeItems(page.value.sales_departments))
const educationalDepartment = computed(() => normalizeItems(page.value.educational_department))
const representativeOffices = computed(() => normalizeItems(page.value.representative_offices))
const socials = computed(() => normalizeItems(page.value.socials_media))
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
