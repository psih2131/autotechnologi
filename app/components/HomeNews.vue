<template>
  <section class="home-news-section">
    <div class="container">
      <div class="home-news__head">
        <h2 v-if="title" class="home-news__title">{{ title }}</h2>
        <NuxtLink to="/news" class="home-news__all">
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4688 24C21.1196 24 20.7704 23.8768 20.4947 23.6128C19.9616 23.1025 19.9616 22.2577 20.4947 21.7474L30.6777 11.9978L20.4947 2.24821C19.9616 1.73786 19.9616 0.893126 20.4947 0.382768C21.0277 -0.127589 21.91 -0.127589 22.443 0.382768L33.6002 11.0651C34.1333 11.5754 34.1333 12.4202 33.6002 12.9305L22.443 23.6128C22.1673 23.8768 21.8181 24 21.4688 24Z" fill="black"/>
            <path d="M32.3136 13.3177H1.37856C0.624949 13.3177 0 12.7193 0 11.9978C0 11.2763 0.624949 10.6779 1.37856 10.6779H32.3136C33.0672 10.6779 33.6921 11.2763 33.6921 11.9978C33.6921 12.7193 33.0672 13.3177 32.3136 13.3177Z" fill="black"/>
          </svg>
        </NuxtLink>
      </div>
      <div v-if="items.length" class="home-news__grid">
        <NewsCard
          v-for="(item, idx) in items"
          :key="idx"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  items: { type: Array, default: () => [] },
})
</script>
