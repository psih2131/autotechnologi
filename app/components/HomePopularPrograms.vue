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
        class="home-popular__nav-btn home-popular__nav-btn--prev"
        aria-label="Предыдущий слайд"
        @click="swiper.prev()"
      >
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8.36328C15.5523 8.36328 16 7.91557 16 7.36328C16 6.811 15.5523 6.36328 15 6.36328V7.36328V8.36328ZM0.292893 6.65617C-0.0976315 7.0467 -0.0976315 7.67986 0.292893 8.07039L6.65685 14.4343C7.04738 14.8249 7.68054 14.8249 8.07107 14.4343C8.46159 14.0438 8.46159 13.4107 8.07107 13.0201L2.41421 7.36328L8.07107 1.70643C8.46159 1.3159 8.46159 0.682738 8.07107 0.292213C7.68054 -0.0983109 7.04738 -0.0983109 6.65685 0.292213L0.292893 6.65617ZM15 7.36328V6.36328L1 6.36328V7.36328V8.36328L15 8.36328V7.36328Z" fill="#3D558F"/>
        </svg>
      </button>
      <button
        type="button"
        class="home-popular__nav-btn home-popular__nav-btn--next"
        aria-label="Следующий слайд"
        @click="swiper.next()"
      >
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8.36328C0.447715 8.36328 0 7.91557 0 7.36328C0 6.811 0.447715 6.36328 1 6.36328L1 7.36328L1 8.36328ZM15.7071 6.65617C16.0976 7.0467 16.0976 7.67986 15.7071 8.07039L9.34315 14.4343C8.95262 14.8249 8.31946 14.8249 7.92893 14.4343C7.53841 14.0438 7.53841 13.4107 7.92893 13.0201L13.5858 7.36328L7.92893 1.70643C7.53841 1.3159 7.53841 0.682738 7.92893 0.292213C8.31946 -0.0983109 8.95262 -0.0983109 9.34315 0.292213L15.7071 6.65617ZM1 7.36328L1 6.36328L15 6.36328V7.36328V8.36328L1 8.36328L1 7.36328Z" fill="#3D558F"/>
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

function equalizeCardHeights() {
  const root = containerRef.value
  if (!root) return

  const cards = root.querySelectorAll('.programs-card')
  if (!cards.length) return

  cards.forEach((card) => {
    card.style.height = 'auto'
  })

  let maxHeight = 0
  cards.forEach((card) => {
    maxHeight = Math.max(maxHeight, card.offsetHeight)
  })

  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`
  })
}

async function initSlider() {
  if (!containerRef.value || !sliderCourses.value.length) return
  await nextTick()
  swiper.reInitialize()
  await nextTick()
  equalizeCardHeights()
}

watch([containerRef, sliderCourses], () => {
  initSlider()
})

onMounted(() => {
  window.addEventListener('resize', equalizeCardHeights)
})

onUnmounted(() => {
  window.removeEventListener('resize', equalizeCardHeights)
})
</script>
