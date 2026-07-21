<template>
  <section class="about-why-section">
    <div class="container">
      <h2 v-if="title" class="about-why__title">{{ title }}</h2>

      <div class="about-why__grid">
        <div class="about-why__main">
          <div class="about-why__row about-why__row--top">
            <div class="about-why__card about-why__card--programs">
              <div class="about-why__programs-head">
                <div class="about-why__programs-stat">
                  <span v-if="box1Title" class="about-why__stat-value">{{ box1Title }}</span>
                  <span v-if="box1Subtitle" class="about-why__stat-label">{{ box1Subtitle }}</span>
                </div>
                <div v-if="resolvedAvatars.length" class="about-why__avatars">
                  <img
                    v-for="(avatar, idx) in resolvedAvatars"
                    :key="idx"
                    :src="avatar"
                    alt=""
                    class="about-why__avatar"
                  >
                </div>
              </div>
              <p
                v-if="box1Text"
                class="about-why__card-text about-why__card-text--bottom"
                v-html="box1Text"
              ></p>
            </div>

            <div class="about-why__card about-why__card--format">
              <h3 v-if="box2Title" class="about-why__card-title" v-html="box2Title"></h3>
              <p v-if="box2Text" class="about-why__card-text" v-html="box2Text"></p>
            </div>
          </div>

          <div class="about-why__row about-why__row--bottom">
            <div class="about-why__card about-why__card--docs">
              <h3 v-if="box3Title" class="about-why__card-title" v-html="box3Title"></h3>
              <p v-if="box3Text" class="about-why__card-text" v-html="box3Text"></p>
            </div>

            <div class="about-why__card about-why__card--frdo">
              <div class="about-why__frdo-head">
                <img :src="frdoEmblem" alt="" class="about-why__frdo-emblem">
                <h3 v-if="box4Title" class="about-why__card-title" v-html="box4Title"></h3>
              </div>
              <p v-if="box4Text" class="about-why__card-text" v-html="box4Text"></p>
            </div>
          </div>
        </div>

        <div class="about-why__card about-why__card--help">
          <h3
            v-if="box5Title"
            class="about-why__card-title about-why__card-title--light"
            v-html="box5Title"
          ></h3>
          <p
            v-if="box5Text"
            class="about-why__card-text about-why__card-text--light"
            v-html="box5Text"
          ></p>
          <div class="about-why__docs" aria-hidden="true">
            <img :src="doc1" alt="" class="about-why__doc about-why__doc--back">
            <img :src="doc2" alt="" class="about-why__doc about-why__doc--front">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import doc1 from '~/assets/images/docs/doc-about-1.png'
import doc2 from '~/assets/images/docs/doc-about-2.png'
import frdoEmblem from '~/assets/images/gos4.png'

import avatar1 from '~/assets/images/who/x1.jpg'
import avatar2 from '~/assets/images/who/x2.jpg'
import avatar3 from '~/assets/images/who/x3.jpg'
import avatar4 from '~/assets/images/who/x4.jpg'

const props = defineProps({
  title: { type: String, default: '' },
  box1Title: { type: String, default: '' },
  box1Subtitle: { type: String, default: '' },
  box1Text: { type: String, default: '' },
  box1Images: { type: Array, default: () => [] },
  box2Title: { type: String, default: '' },
  box2Text: { type: String, default: '' },
  box3Title: { type: String, default: '' },
  box3Text: { type: String, default: '' },
  box4Title: { type: String, default: '' },
  box4Text: { type: String, default: '' },
  box5Title: { type: String, default: '' },
  box5Text: { type: String, default: '' },
})

const fallbackAvatars = [avatar1, avatar2, avatar3, avatar4]

const resolvedAvatars = computed(() =>
  props.box1Images?.length ? props.box1Images : fallbackAvatars,
)
</script>
