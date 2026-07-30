<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-section__inner">
        <div class="banner-section__content">
          <div class="banner-section__text">
            <h2 v-if="title" class="banner-section__title">{{ title }}</h2>
            <p v-if="description" class="banner-section__description">
              {{ description }}
            </p>
          </div>

          <form class="banner-section__form" action="#" @submit.prevent="submit">
            <div class="banner-section__fields">
              <input
                v-model="name"
                type="text"
                class="banner-section__input"
                placeholder="Имя"
                autocomplete="name"
                :disabled="loading"
              >
              <input
                :value="phone"
                type="tel"
                class="banner-section__input"
                placeholder="+7 (900) 900 00 00"
                autocomplete="tel"
                :disabled="loading"
                inputmode="numeric"
                @keypress="onPhoneKeypress"
                @input="onPhoneInput"
              >
              <button type="submit" class="banner-section__submit" :disabled="!canSubmit">
                {{ loading ? 'Отправка...' : 'Оставить заявку' }}
              </button>
            </div>
            <label class="banner-section__agreement">
              <input v-model="agreed" type="checkbox" class="banner-section__checkbox" :disabled="loading">
              <span class="banner-section__agreement-text">
                Отправляя форму, я соглашаюсь с
                <NuxtLink to="/docs/terms">Пользовательским соглашением</NuxtLink>
                и даю согласие на обработку персональных данных в соответствии с
                <NuxtLink to="/docs/privacy">Политикой конфиденциальности</NuxtLink>
              </span>
            </label>
          </form>
        </div>

        <div v-if="resolvedImage" class="banner-section__image-wrap">
          <img :src="resolvedImage" :alt="title || ''" class="banner-section__image">
          <div class="banner-section__image-gradient"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerFallback from '~/assets/images/banner-img-1.jpg'

const props = defineProps({
  title: {
    type: String,
    default: 'Остались вопросы?',
  },
  description: {
    type: String,
    default: 'Оставьте заявку, наши специалисты проконсультируют вас по программам обучения, документам, стоимости и формату обучения, а также помогут подобрать подходящий курс.',
  },
  // undefined = другие страницы без пропа → локальный фолбэк; '' = с CMS без картинки → не показываем
  image: {
    type: String,
    default: undefined,
  },
})

const resolvedImage = computed(() => props.image ?? bannerFallback)

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
