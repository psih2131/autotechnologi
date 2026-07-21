<template>
  <section class="home-hero">
    <div class="container home-hero__container">
      <div class="home-hero__content">
        <h1 v-if="title" class="home-hero__title" v-html="title"></h1>
        <p v-if="subtitle" class="home-hero__text">{{ subtitle }}</p>
        <div v-if="avatars.length || stats.length" class="home-hero__stats">
          <div v-if="avatars.length" class="home-hero__avatars">
            <img
              v-for="(avatar, idx) in avatars"
              :key="idx"
              :src="avatar"
              alt=""
              class="home-hero__avatar"
            >
          </div>
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="home-hero__stat"
            :class="statClass(idx)"
          >
            <span class="home-hero__stat-value">{{ stat.value }}</span>
            <span class="home-hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="resolvedBg" class="home-hero__image-wrap" aria-hidden="true">
      <img :src="resolvedBg" alt="" class="home-hero__image">
    </div>
  </section>
</template>

<script setup>
import heroBgFallback from '~/assets/images/home-hero-bg.png'

const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  stats: { type: Array, default: () => [] },
  avatars: { type: Array, default: () => [] },
  backgroundImage: { type: String, default: '' },
})

const resolvedBg = computed(() => props.backgroundImage || heroBgFallback)

function statClass(idx) {
  if (idx === 0) return 'home-hero__stat--programs'
  if (idx === 1) return 'home-hero__stat--graduates'
  return 'home-hero__stat--experience'
}
</script>
