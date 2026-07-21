<template>
  <section class="home-popular-section">
    <h2 v-if="title" class="home-popular__title">{{ title }}</h2>
    <div v-if="sliderCourses.length" class="home-popular__slider-wrap">
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
const props = defineProps({
  title: { type: String, default: '' },
  courses: { type: Array, default: () => [] },
})

const containerRef = ref(null)

const sliderCourses = computed(() => {
  const list = props.courses || []
  if (!list.length) return []
  if (list.length === 1) return list
  return [...list, ...list]
})

const swiper = useSwiper(containerRef, {
  slidesPerView: 'auto',
  spaceBetween: 19,
  loop: true,
})

watch([containerRef, sliderCourses], ([el]) => {
  if (el && sliderCourses.value.length) {
    nextTick(() => swiper.reInitialize())
  }
})
</script>
