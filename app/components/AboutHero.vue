<template>
  <section class="about-hero">
    <div class="container about-hero__container">
      <nav class="about-hero__breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span class="about-hero__breadcrumbs-sep">/</span>
        <span>Об учебном центре</span>
      </nav>

      <div class="about-hero__body">
        <div class="about-hero__content">
          <h1 v-if="title" class="about-hero__title">{{ title }}</h1>
          <p v-if="description" class="about-hero__description">
            {{ description }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="resolvedImage1 || resolvedImage2" class="about-hero__docs" aria-hidden="true">
      <img
        v-if="resolvedImage1"
        :src="resolvedImage1"
        alt=""
        class="about-hero__doc about-hero__doc--back"
      >
      <img
        v-if="resolvedImage2"
        :src="resolvedImage2"
        alt=""
        class="about-hero__doc about-hero__doc--front"
      >
    </div>
  </section>
</template>

<script setup>
import doc1 from '~/assets/images/docs/doc-about-1.png'
import doc2 from '~/assets/images/docs/doc-about-2.png'

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image1: { type: String, default: '' },
  image2: { type: String, default: '' },
})

const resolvedImage1 = computed(() => props.image1 || doc1)
const resolvedImage2 = computed(() => props.image2 || doc2)
</script>
