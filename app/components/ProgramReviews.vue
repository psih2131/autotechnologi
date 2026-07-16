<template>
  <section class="program-reviews-section">
    <div class="container">
      <div class="program-reviews">
        <div class="program-reviews__head">
          <h2 class="program-reviews__title">Отзывы учеников</h2>
          <p class="program-reviews__subtitle">
            Реальные ситуации водителей, специалистов и организаций, которые прошли обучение и получили документы.
          </p>
        </div>

        <div class="program-reviews__videos">
          <div
            v-for="(video, idx) in reviewVideos"
            :key="idx"
            class="program-reviews__video-item"
          >
            <iframe
              :src="video.src"
              :title="video.title"
              class="program-reviews__video-iframe"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="program-reviews__text-slider">
          <div class="program-reviews__nav-row">
            <button
              type="button"
              class="program-reviews__nav program-reviews__nav--prev"
              aria-label="Предыдущий слайд"
              @click="swiper.prev()"
            >
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8.36328C15.5523 8.36328 16 7.91557 16 7.36328C16 6.811 15.5523 6.36328 15 6.36328V7.36328V8.36328ZM0.292893 6.65617C-0.0976315 7.0467 -0.0976315 7.67986 0.292893 8.07039L6.65685 14.4343C7.04738 14.8249 7.68054 14.8249 8.07107 14.4343C8.46159 14.0438 8.46159 13.4107 8.07107 13.0201L2.41421 7.36328L8.07107 1.70643C8.46159 1.3159 8.46159 0.682738 8.07107 0.292213C7.68054 -0.0983109 7.04738 -0.0983109 6.65685 0.292213L0.292893 6.65617ZM15 7.36328V6.36328L1 6.36328V7.36328V8.36328L15 8.36328V7.36328Z" fill="#3D558F"/>
            </svg>

            </button>

            <ClientOnly>
              <swiper-container ref="containerRef" :init="false" class="program-reviews__swiper">
                <swiper-slide
                  v-for="(slide, idx) in reviewSlides"
                  :key="idx"
                  class="program-reviews__slide"
                >
                  <article
                    v-for="(review, rIdx) in slide"
                    :key="rIdx"
                    class="program-reviews__card"
                  >
                    <p class="program-reviews__text">{{ review.text }}</p>
                    <div class="program-reviews__author">
                      <img :src="review.avatar" :alt="review.name" class="program-reviews__avatar">
                      <div>
                        <p class="program-reviews__author-name">{{ review.name }}</p>
                        <p class="program-reviews__author-city">{{ review.city }}</p>
                      </div>
                    </div>
                  </article>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>

            <button
              type="button"
              class="program-reviews__nav"
              aria-label="Следующий слайд"
              @click="swiper.next()"
            >
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.36328C0.447715 8.36328 0 7.91557 0 7.36328C0 6.811 0.447715 6.36328 1 6.36328L1 7.36328L1 8.36328ZM15.7071 6.65617C16.0976 7.0467 16.0976 7.67986 15.7071 8.07039L9.34315 14.4343C8.95262 14.8249 8.31946 14.8249 7.92893 14.4343C7.53841 14.0438 7.53841 13.4107 7.92893 13.0201L13.5858 7.36328L7.92893 1.70643C7.53841 1.3159 7.53841 0.682738 7.92893 0.292213C8.31946 -0.0983109 8.95262 -0.0983109 9.34315 0.292213L15.7071 6.65617ZM1 7.36328L1 6.36328L15 6.36328V7.36328V8.36328L1 8.36328L1 7.36328Z" fill="#3D558F"/>
            </svg>

            </button>
          </div>

          <div class="program-reviews__pagination">
            <button
              v-for="(_, idx) in reviewSlides"
              :key="idx"
              type="button"
              class="program-reviews__dot"
              :class="{ 'program-reviews__dot--active': activeSlide === idx }"
              :aria-label="'Слайд ' + (idx + 1)"
              @click="swiper.to(idx)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import avatar1 from '~/assets/images/who/x1.jpg'
import avatar2 from '~/assets/images/who/x2.jpg'
import avatar3 from '~/assets/images/who/x3.jpg'
import avatar4 from '~/assets/images/who/x4.jpg'
import avatar5 from '~/assets/images/who/x5.jpg'
import avatar6 from '~/assets/images/who/x6.jpg'

const containerRef = ref(null)
const activeSlide = ref(0)

const reviewVideos = [
  {
    src: 'https://www.youtube.com/embed/tiEoSAE3TW8?si=ofvzwf8RfPkm1LOM',
    title: 'Видеоотзыв 1',
  },
  {
    src: 'https://www.youtube.com/embed/2y2Z06hVmWE?si=XyXlH6SsVVCF9lMW',
    title: 'Видеоотзыв 2',
  },
]

const reviewSlides = [
  [
    {
      text: 'Всё было изложено простым языком, так понятно и доступно, а главное Вы дали нам именно то, что действительно необходимо в ежедневной работе. Все слушатели повышения квалификации (более 30 человек) от всего сердца благодарят компанию Автотехнологии за безупречно проведенные курсы.',
      name: 'Олег Кукушкин',
      city: 'Москва',
      avatar: avatar2,
    },
    {
      text: 'В целом все не архи сложно и довольно удобно для человека, который замотивирован и умеет планировать свое время. Хотелось бы, чтобы материал был разнообразнее. Ответов на тесты искать в интернете не стоит) их там почти нет) Ограничений на пересдачу нет, но кто учит, тот сдаст и с первого раза.',
      name: 'Владимир Санько',
      city: 'Курск',
      avatar: avatar5,
    },
  ],
  [
    {
      text: 'Обучение прошло в удобном формате, материал структурирован и понятен. Особенно ценно, что можно проходить курс в своём темпе, не отрываясь от работы.',
      name: 'Андрей Петров',
      city: 'Челябинск',
      avatar: avatar1,
    },
    {
      text: 'Прошёл курс вместе с коллегами. Все остались довольны качеством материалов и оперативной поддержкой учебного центра.',
      name: 'Сергей Морозов',
      city: 'Екатеринбург',
      avatar: avatar4,
    },
  ],
  [
    {
      text: 'Документы получили быстро, всё официально. Рекомендую организациям, которым важно соблюдать требования по обучению персонала.',
      name: 'Ирина Соколова',
      city: 'Москва',
      avatar: avatar6,
    },
    {
      text: 'Удобная платформа, понятные тесты. После обучения чувствуешь себя увереннее за рулём в сложных условиях.',
      name: 'Дмитрий Козлов',
      city: 'Тюмень',
      avatar: avatar3,
    },
  ],
]

const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  spaceBetween: 0,
})

watch(swiper.realIndex, (idx) => {
  activeSlide.value = idx
})

watch(containerRef, (el) => {
  if (el) {
    nextTick(() => swiper.reInitialize())
  }
})
</script>
