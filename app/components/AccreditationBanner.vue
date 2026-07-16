<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-section__inner">
        <div class="banner-section__content">
          <div class="banner-section__text">
            <h2 class="banner-section__title">{{ title }}</h2>
            <p class="banner-section__description">
              {{ description }}
            </p>
          </div>

          <form class="banner-section__form" action="#" @submit.prevent>
            <div class="banner-section__fields">
              <input type="text" class="banner-section__input" placeholder="Имя">
              <input type="tel" class="banner-section__input" placeholder="+7 (900) 900 00 00">
              <button type="submit" class="banner-section__submit">Оставить заявку</button>
            </div>
            <label class="banner-section__agreement">
              <input type="checkbox" class="banner-section__checkbox">
              <span class="banner-section__agreement-text">
                Отправляя форму, я соглашаюсь с
                <a href="#">Пользовательским соглашением</a>
                и даю согласие на обработку персональных данных в соответствии с
                <a href="#">Политикой конфиденциальности</a>
              </span>
            </label>
          </form>
        </div>

        <div class="banner-section__image-wrap">
          <img src="~/assets/images/banner-img-1.jpg" alt="" class="banner-section__image">
          <div class="banner-section__image-gradient"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Остались вопросы?',
  },
  description: {
    type: String,
    default: 'Оставьте заявку, наши специалисты проконсультируют вас по программам обучения, документам, стоимости и формату обучения, а также помогут подобрать подходящий курс.',
  },
})
</script>
