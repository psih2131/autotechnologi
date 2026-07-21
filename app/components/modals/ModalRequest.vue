<template>
  <div class="modal-request" role="dialog" aria-modal="true" aria-labelledby="modal-request-title">
    <button
      type="button"
      class="modal-request__close"
      aria-label="Закрыть"
      @click="modalStore.close()"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 1L17 17M17 1L1 17" stroke="#2A272B" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    </button>

    <h2 id="modal-request-title" class="modal-request__title">Оставьте заявку</h2>
    <p class="modal-request__text">
      Наши специалисты проконсультируют вас по программам обучения, документам, стоимости и формату обучения, а также помогут подобрать подходящий курс.
    </p>

    <form class="modal-request__form" action="#" @submit.prevent="onSubmit">
      <input
        v-model="name"
        type="text"
        class="modal-request__input"
        placeholder="Имя"
        autocomplete="name"
      >
      <input
        v-model="phone"
        type="tel"
        class="modal-request__input"
        placeholder="+7 (900) 900 00 00"
        autocomplete="tel"
      >

      <label class="modal-request__agreement">
        <input v-model="agreed" type="checkbox" class="modal-request__checkbox">
        <span class="modal-request__agreement-text">
          Отправляя форму, я соглашаюсь с
          <NuxtLink to="/docs/terms" @click="modalStore.close()">Пользовательским соглашением</NuxtLink>
          и даю согласие на обработку персональных данных в соответствии с
          <NuxtLink to="/docs/privacy" @click="modalStore.close()">Политикой конфиденциальности</NuxtLink>
        </span>
      </label>

      <button type="submit" class="modal-request__submit">Оставить заявку</button>
    </form>
  </div>
</template>

<script setup>
const modalStore = useModalStore()

const name = ref('')
const phone = ref('')
const agreed = ref(false)

function onSubmit() {
  if (!name.value.trim() || !phone.value.trim() || !agreed.value) return
  // TODO: отправка заявки
  modalStore.close()
}
</script>
