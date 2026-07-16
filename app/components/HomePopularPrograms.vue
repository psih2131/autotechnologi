<template>
  <section class="home-popular-section">
    <h2 class="home-popular__title">Самые популярные программы</h2>
    <div class="home-popular__slider-wrap">
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="home-popular__swiper">
          <swiper-slide
            v-for="(course, idx) in sliderCourses"
            :key="idx"
            class="home-popular__slide"
          >
            <ProgramCard v-bind="course" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <div class="home-popular__fade" aria-hidden="true"></div>
      <button
        type="button"
        class="home-popular__nav-btn"
        aria-label="Следующий слайд"
        @click="swiper.next()"
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L8 8L2 14" stroke="#3D558F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
const containerRef = ref(null)

const courses = [
  {
    to: '/programs/1',
    category: 'БДД',
    title: 'Ежегодное обучение водителей',
    description: 'Обязательное ежегодное обучение для водителей автотранспортных средств.',
    duration: '20 часов',
    format: 'Дистанционно',
    price: '1000 ₽',
    hit: true,
  },
  {
    to: '/programs/2',
    category: 'БДД',
    title: 'Вождение в сложных дорожных условиях',
    description: 'Для водителей, работающих в зимний период и в сложных дорожных условиях.',
    duration: '32 часа',
    format: 'Дистанционно',
    price: '3000 ₽',
  },
  {
    to: '/programs/3',
    category: 'МАП',
    title: 'Международные автомобильные перевозки',
    description: 'Профессиональная компетенция международных автомобильных перевозчиков.',
    duration: '72 часа',
    format: 'Дистанционно',
    price: '3000 ₽',
  },
  {
    to: '/programs/4',
    category: 'Переподготовка',
    title: 'Специалист по БДД + тренировочное тестирование',
    description: 'Переподготовка с подготовкой к итоговому тестированию и проверке знаний.',
    duration: '280 часов',
    format: 'Дистанционно',
    price: '10 000 ₽',
  },
]

const sliderCourses = [...courses, ...courses]

const swiper = useSwiper(containerRef, {
  slidesPerView: 'auto',
  spaceBetween: 19,
  loop: true,
  loopAdditionalSlides: courses.length,
})

watch(containerRef, (el) => {
  if (el) {
    nextTick(() => swiper.reInitialize())
  }
})
</script>
