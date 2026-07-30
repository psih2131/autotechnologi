<template>
  <section class="home-start-section">
    <div class="container">
      <h2 v-if="title" class="home-start__title" v-html="title"></h2>
      <div class="home-start__cards">
        <article class="home-start__card home-start__card--help">
          <div class="home-start__card-content">
            <h3 v-if="box1Title" class="home-start__card-title">{{ box1Title }}</h3>
            <p v-if="box1Subtitle" class="home-start__card-text">{{ box1Subtitle }}</p>
            <button
              v-if="box1ButtonText"
              type="button"
              class="home-start__card-btn"
              @click="modalStore.open('request')"
            >{{ box1ButtonText }}</button>
          </div>
          <div class="home-start__card-visual home-start__card-visual--docs" aria-hidden="true">
            <img :src="doc1" alt="" class="home-start__card-doc home-start__card-doc--1">
          </div>
        </article>
        <article class="home-start__card home-start__card--materials">
          <div class="home-start__card-content">
            <h3 v-if="box2Title" class="home-start__card-title">{{ box2Title }}</h3>
            <p v-if="box2Text" class="home-start__card-text">{{ box2Text }}</p>
            <a
              v-if="box2ButtonTitle"
              :href="box2FileUrl || undefined"
              class="home-start__card-btn"
              download
            >{{ box2ButtonTitle }}</a>
          </div>
          <div class="home-start__card-visual home-start__card-visual--book-2" aria-hidden="true">
            <img :src="doc2" alt="" class="home-start__card-book">
          </div>
        </article>
      </div>
      <div id="home-start-form" class="home-start__cta">
        <div class="home-start__cta-text">
          <h3 class="home-start__cta-title">Остались вопросы?</h3>
          <p class="home-start__cta-desc">
            Специалисты учебного центра помогут разобраться с программами, документами и форматом обучения.
          </p>
        </div>
        <form class="home-start__cta-form" action="#" @submit.prevent="submit">
          <div class="home-start__cta-fields">
            <input
              v-model="name"
              type="text"
              class="home-start__cta-input"
              placeholder="Имя"
              autocomplete="name"
              :disabled="loading"
            >
            <input
              :value="phone"
              type="tel"
              class="home-start__cta-input"
              placeholder="+7 (900) 900 00 00"
              autocomplete="tel"
              :disabled="loading"
              inputmode="numeric"
              @keypress="onPhoneKeypress"
              @input="onPhoneInput"
            >
            <button type="submit" class="home-start__cta-submit" :disabled="!canSubmit">
              {{ loading ? 'Отправка...' : 'Оставить заявку' }}
            </button>
          </div>
          <label class="home-start__cta-agreement">
            <input v-model="agreed" type="checkbox" class="home-start__cta-checkbox" :disabled="loading">
            <span class="home-start__cta-agreement-text">
              Отправляя форму, я соглашаюсь с
              <NuxtLink to="/docs/terms">Пользовательским соглашением</NuxtLink>
              и даю согласие на обработку персональных данных в соответствии с
              <NuxtLink to="/docs/privacy">Политикой конфиденциальности</NuxtLink>
            </span>
          </label>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import doc1 from '~/assets/images/docs/home-1.png'
import doc2 from '~/assets/images/docs/home-2.png'

defineProps({
  title: { type: String, default: '' },
  box1Title: { type: String, default: '' },
  box1Subtitle: { type: String, default: '' },
  box1ButtonText: { type: String, default: '' },
  box2Title: { type: String, default: '' },
  box2Text: { type: String, default: '' },
  box2ButtonTitle: { type: String, default: '' },
  box2FileUrl: { type: String, default: '' },
})

const modalStore = useModalStore()
const {
  name,
  phone,
  agreed,
  loading,
  canSubmit,
  onPhoneInput,
  onPhoneKeypress,
  submit,
} = useRequestForm()
</script>
