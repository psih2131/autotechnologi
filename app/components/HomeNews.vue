<template>
  <section class="home-news-section">
    <div class="container">
      <div class="home-news__head">
        <h2 class="home-news__title">Новости и полезные материалы</h2>
        <NuxtLink to="/news" class="home-news__all">
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4688 24C21.1196 24 20.7704 23.8768 20.4947 23.6128C19.9616 23.1025 19.9616 22.2577 20.4947 21.7474L30.6777 11.9978L20.4947 2.24821C19.9616 1.73786 19.9616 0.893126 20.4947 0.382768C21.0277 -0.127589 21.91 -0.127589 22.443 0.382768L33.6002 11.0651C34.1333 11.5754 34.1333 12.4202 33.6002 12.9305L22.443 23.6128C22.1673 23.8768 21.8181 24 21.4688 24Z" fill="black"/>
            <path d="M32.3136 13.3177H1.37856C0.624949 13.3177 0 12.7193 0 11.9978C0 11.2763 0.624949 10.6779 1.37856 10.6779H32.3136C33.0672 10.6779 33.6921 11.2763 33.6921 11.9978C33.6921 12.7193 33.0672 13.3177 32.3136 13.3177Z" fill="black"/>
          </svg>
        </NuxtLink>
      </div>
      <div class="home-news__grid">
        <NewsCard
          v-for="(item, idx) in newsItems"
          :key="idx"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import post1 from '~/assets/images/posts/post1.jpg'
import post2 from '~/assets/images/posts/post2.jpg'
import post3 from '~/assets/images/posts/post3.jpg'

const newsItems = [
  {
    to: '/news/1',
    image: post1,
    date: '30 января 2026',
    title: 'Когда требуется обучение по международным перевозкам и СПК',
    excerpt: 'Кому обязательно проходить обучение и какие документы проверяют.',
  },
  {
    to: '/news/1',
    image: post2,
    date: '30 января 2026',
    title: 'Обязательное обучение по БДД: кого назначать и за что отвечают',
    excerpt: 'Разъяснение для организаций и специалистов.',
  },
  {
    to: '/news/1',
    image: post3,
    date: '30 января 2026',
    title: 'Как выбрать программу повышения квалификации для водителей',
    excerpt: 'Краткий гид по популярным курсам и требованиям.',
  },
]
</script>
