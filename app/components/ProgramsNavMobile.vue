<template>
  <div
    v-if="popularCategories.length || otherCategories.length"
    class="programs-nav-mobile"
    :class="{ 'programs-nav-mobile--open': open }"
  >
    <button
      type="button"
      class="programs-nav-mobile__btn"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span>Список программ</span>
      <span class="programs-nav-mobile__toggle" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="#3D558F" stroke-width="1.5" stroke-linecap="round" class="programs-nav-mobile__toggle-v"/>
          <path d="M5 12H19" stroke="#3D558F" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>
    </button>

    <ClientOnly>
      <Vue3SlideUpDown :model-value="open" :duration="300">
        <div class="programs-nav-mobile__body">
          <div v-if="popularCategories.length" class="programs-sidebar__nav-claster">
            <h2 class="programs-sidebar__nav-claster-title">Популярные направления подготовки</h2>
            <nav class="programs-sidebar__nav-claster-list">
              <ul class="programs-sidebar__nav-claster-list-items">
                <li
                  v-for="category in popularCategories"
                  :key="category.slug"
                  class="programs-sidebar__nav-claster-list-item"
                >
                  <NuxtLink
                    :to="`/programs/categories/${category.slug}`"
                    class="programs-sidebar__nav-claster-list-link"
                    :class="{ active: activeSlug === category.slug }"
                  >
                    <span class="programs-sidebar__link-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V22C20 22.3905 19.7727 22.7453 19.4179 22.9085C19.0631 23.0717 18.6457 23.0134 18.3492 22.7593L12 17.3171L5.65079 22.7593C5.35428 23.0134 4.93694 23.0717 4.58214 22.9085C4.22734 22.7453 4 22.3905 4 22V4ZM7 3C6.44772 3 6 3.44772 6 4V19.8258L11.3492 15.2407C11.7237 14.9198 12.2763 14.9198 12.6508 15.2407L18 19.8258V4C18 3.44772 17.5523 3 17 3H7Z" fill="#7E7F81"/>
                      </svg>
                    </span>
                    {{ category.title }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

          <div v-if="otherCategories.length" class="programs-sidebar__nav-claster">
            <h2 class="programs-sidebar__nav-claster-title">Другие направления подготовки</h2>
            <nav class="programs-sidebar__nav-claster-list">
              <ul class="programs-sidebar__nav-claster-list-items">
                <li
                  v-for="category in otherCategories"
                  :key="category.slug"
                  class="programs-sidebar__nav-claster-list-item"
                >
                  <NuxtLink
                    :to="`/programs/categories/${category.slug}`"
                    class="programs-sidebar__nav-claster-list-link"
                    :class="{ active: activeSlug === category.slug }"
                  >
                    {{ category.title }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Vue3SlideUpDown>
    </ClientOnly>
  </div>
</template>

<script setup>
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

defineProps({
  popularCategories: {
    type: Array,
    default: () => [],
  },
  otherCategories: {
    type: Array,
    default: () => [],
  },
  activeSlug: {
    type: String,
    default: '',
  },
})

const open = ref(false)
</script>
