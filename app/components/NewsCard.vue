<template>
  <article class="news-card" :class="{ 'news-card--sidebar': sidebar }">
    <NuxtLink :to="to" class="news-card__link">
      <div class="news-card__image-wrap">
        <img :src="image" :alt="title" class="news-card__image">
      </div>
      <div class="news-card__body">
        <time class="news-card__date">{{ date }}</time>
        <component :is="headingTag" class="news-card__title">{{ title }}</component>
        <p class="news-card__excerpt">{{ excerpt }}</p>
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
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  sidebar: {
    type: Boolean,
    default: false,
  },
  headingLevel: {
    type: Number,
    default: 2,
  },
})

const headingTag = computed(() => `h${props.headingLevel}`)
</script>
