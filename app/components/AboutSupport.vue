<template>
  <section class="about-support-section">
    <div class="container">
      <div class="about-support">
        <div class="about-support__content">
          <h2
            v-if="title"
            class="about-support__title"
            v-html="title"
          ></h2>
          <p
            v-if="text"
            class="about-support__text"
            v-html="text"
          ></p>

          <a
            v-if="buttonText"
            :href="buttonLink || undefined"
            class="about-support__read-more"
          >
            <span>
              {{ buttonText }}
            </span>
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.68 13.6375C11.49 13.6375 11.3 13.5675 11.15 13.4175C10.86 13.1275 10.86 12.6475 11.15 12.3575L16.69 6.8175L11.15 1.2775C10.86 0.9875 10.86 0.5075 11.15 0.2175C11.44 -0.0725 11.92 -0.0725 12.21 0.2175L18.28 6.2875C18.57 6.5775 18.57 7.0575 18.28 7.3475L12.21 13.4175C12.06 13.5675 11.87 13.6375 11.68 13.6375Z" fill="white"/>
            <path d="M17.58 7.5675H0.75C0.34 7.5675 0 7.2275 0 6.8175C0 6.4075 0.34 6.0675 0.75 6.0675H17.58C17.99 6.0675 18.33 6.4075 18.33 6.8175C18.33 7.2275 17.99 7.5675 17.58 7.5675Z" fill="white"/>
            </svg>
          </a>
        </div>

        <div v-if="resolvedImage" class="about-support__image-wrap">
          <img :src="resolvedImage" alt="" class="about-support__image">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import supportDoc from '~/assets/images/docs/about-doc-3.png'

const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  buttonText: { type: String, default: 'Подробнее об услуге' },
  buttonLink: { type: String, default: '' },
  image: { type: String, default: '' },
})

const resolvedImage = computed(() => props.image || supportDoc)
</script>
