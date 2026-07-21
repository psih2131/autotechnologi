<template>
  <section class="home-categories-section">
    <div class="container">
      <div v-if="featured" class="home-categories__banner">
        <img :src="bannerImg" alt="" class="home-categories__banner-bg" aria-hidden="true">
        <div class="home-categories__banner-overlay" aria-hidden="true"></div>

        <div class="home-categories__banner-content">
          <div class="home-categories__banner-badge">Самое популярное направление</div>
          <h2 class="home-categories__banner-title">{{ featured.title }}</h2>
          <p v-if="featured.subtitle" class="home-categories__banner-text">
            {{ featured.subtitle }}
          </p>

          <NuxtLink :to="featured.to" class="home-categories__banner-link">
            <span>{{ featured.count }}</span>
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11.68 13.6375C11.49 13.6375 11.3 13.5675 11.15 13.4175C10.86 13.1275 10.86 12.6475 11.15 12.3575L16.69 6.8175L11.15 1.2775C10.86 0.9875 10.86 0.5075 11.15 0.2175C11.44 -0.0725 11.92 -0.0725 12.21 0.2175L18.28 6.2875C18.57 6.5775 18.57 7.0575 18.28 7.3475L12.21 13.4175C12.06 13.5675 11.87 13.6375 11.68 13.6375Z" fill="currentColor"/>
              <path d="M17.58 7.5675H0.75C0.34 7.5675 0 7.2275 0 6.8175C0 6.4075 0.34 6.0675 0.75 6.0675H17.58C17.99 6.0675 18.33 6.4075 18.33 6.8175C18.33 7.2275 17.99 7.5675 17.58 7.5675Z" fill="currentColor"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div v-if="categories.length" class="home-categories__grid">
        <NuxtLink
          v-for="(item, idx) in categories"
          :key="idx"
          :to="item.to"
          class="home-categories__item"
        >
          <span class="home-categories__item-title">{{ item.title }}</span>
          <span class="home-categories__item-count">
            <span>{{ item.count }}</span>
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11.68 13.6375C11.49 13.6375 11.3 13.5675 11.15 13.4175C10.86 13.1275 10.86 12.6475 11.15 12.3575L16.69 6.8175L11.15 1.2775C10.86 0.9875 10.86 0.5075 11.15 0.2175C11.44 -0.0725 11.92 -0.0725 12.21 0.2175L18.28 6.2875C18.57 6.5775 18.57 7.0575 18.28 7.3475L12.21 13.4175C12.06 13.5675 11.87 13.6375 11.68 13.6375Z" fill="currentColor"/>
              <path d="M17.58 7.5675H0.75C0.34 7.5675 0 7.2275 0 6.8175C0 6.4075 0.34 6.0675 0.75 6.0675H17.58C17.99 6.0675 18.33 6.4075 18.33 6.8175C18.33 7.2275 17.99 7.5675 17.58 7.5675Z" fill="currentColor"/>
            </svg>
          </span>
        </NuxtLink>
      </div>

      <NuxtLink to="/programs" class="home-categories__catalog">
        <span class="home-categories__catalog-title">Полный каталог курсов</span>
        <span class="home-categories__catalog-arrow" aria-hidden="true">
          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.68 13.6375C11.49 13.6375 11.3 13.5675 11.15 13.4175C10.86 13.1275 10.86 12.6475 11.15 12.3575L16.69 6.8175L11.15 1.2775C10.86 0.9875 10.86 0.5075 11.15 0.2175C11.44 -0.0725 11.92 -0.0725 12.21 0.2175L18.28 6.2875C18.57 6.5775 18.57 7.0575 18.28 7.3475L12.21 13.4175C12.06 13.5675 11.87 13.6375 11.68 13.6375Z" fill="white"/>
            <path d="M17.58 7.5675H0.75C0.34 7.5675 0 7.2275 0 6.8175C0 6.4075 0.34 6.0675 0.75 6.0675H17.58C17.99 6.0675 18.33 6.4075 18.33 6.8175C18.33 7.2275 17.99 7.5675 17.58 7.5675Z" fill="white"/>
          </svg>
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import bannerImg from '~/assets/images/banner-img-2.jpg'

defineProps({
  featured: { type: Object, default: null },
  categories: { type: Array, default: () => [] },
})
</script>
