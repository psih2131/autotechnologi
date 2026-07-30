<template>
  <div class="app">
    <NuxtLayout>
      <main class="error-page">
        <section class="error-section">
          <div class="container">
            <div class="error-section__content">
              <p class="error-section__code">{{ error?.statusCode || 404 }}</p>
              <h1 class="error-section__title">
                {{ isNotFound ? 'Страница не найдена' : 'Что-то пошло не так' }}
              </h1>
              <p class="error-section__text">
                {{
                  isNotFound
                    ? 'Возможно, страница была удалена или вы перешли по неверной ссылке. Вернитесь на главную или выберите нужный раздел.'
                    : 'Произошла ошибка при загрузке страницы. Попробуйте обновить её или вернуться на главную.'
                }}
              </p>
              <div class="error-section__actions">
                <button
                  type="button"
                  class="error-section__btn error-section__btn--primary"
                  @click="goTo('/')"
                >
                  На главную
                </button>
                <button
                  type="button"
                  class="error-section__btn error-section__btn--secondary"
                  @click="goTo('/programs')"
                >
                  Все курсы
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const isNotFound = computed(() => Number(props.error?.statusCode) === 404)

useHead({
  title: () => (isNotFound.value ? 'Страница не найдена' : 'Ошибка'),
})

function goTo(path) {
  clearError({ redirect: path })
}
</script>
