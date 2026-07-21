<template>
  <section class="program-docs">
    <div class="container">
      <div class="program-docs__layout">
        <img
          v-if="resolvedImage"
          :src="resolvedImage"
          alt=""
          class="program-docs__image"
        >

        <div class="program-docs__content">
          <h2 v-if="title" class="program-docs__title">{{ title }}</h2>
          <p v-if="intro" class="program-docs__intro">{{ intro }}</p>

          <ul v-if="docName || docUrl" class="program-docs__list">
            <li>
              <a
                class="program-docs__list-item"
                :href="docUrl || undefined"
                :download="docUrl ? '' : undefined"
                :target="docUrl ? '_blank' : undefined"
                :rel="docUrl ? 'noopener noreferrer' : undefined"
                :aria-disabled="!docUrl ? 'true' : undefined"
              >
                <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.81818 18.2857C6.81818 17.6549 7.32955 17.1429 7.95455 17.1429H17.0455C17.6705 17.1429 18.1818 17.6549 18.1818 18.2857C18.1818 18.9166 17.6705 19.4286 17.0455 19.4286H7.95455C7.32955 19.4286 6.81818 18.9166 6.81818 18.2857Z" fill="#3D558F"/>
                <path d="M6.81818 24C6.81818 23.3691 7.32955 22.8571 7.95455 22.8571H12.5C13.125 22.8571 13.6364 23.3691 13.6364 24C13.6364 24.6309 13.125 25.1429 12.5 25.1429H7.95455C7.32955 25.1429 6.81818 24.6309 6.81818 24Z" fill="#3D558F"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09091 0C8.78409 0 8.50004 0.120034 8.28413 0.334891L0.32959 8.33489C0.125044 8.54861 0 8.84 0 9.14286V26.2857C0 29.4411 2.54545 32 5.68182 32H19.3182C22.4545 32 25 29.4411 25 26.2857V5.71429C25 2.55886 22.4545 0 19.3182 0H9.09091ZM9.09091 9.14286V2.75886L2.73868 9.14286H9.09091ZM10.2273 11.4286H2.27273V26.2857C2.27273 28.1794 3.79545 29.7143 5.68182 29.7143H19.3182C21.2045 29.7143 22.7273 28.1794 22.7273 26.2857V5.71429C22.7273 3.82057 21.2045 2.28571 19.3182 2.28571H11.3636V10.2857C11.3636 10.9166 10.8523 11.4286 10.2273 11.4286Z" fill="#3D558F"/>
                </svg>

                <p class="program-docs__list-text" v-html="docName">
                 
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import docImageFallback from '~/assets/images/docs/program-doc.jpg'

const props = defineProps({
  title: { type: String, default: '' },
  intro: { type: String, default: '' },
  image: { type: String, default: '' },
  docName: { type: String, default: '' },
  docUrl: { type: String, default: '' },
})

const resolvedImage = computed(() => props.image || docImageFallback)
</script>
