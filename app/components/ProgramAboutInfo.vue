<template>
  <section class="program-about">
    <div class="container">
      <div class="program-about-block__top">
        <div class="program-about-block__text">
          <h2
            class="program-about-block__title"
            v-html="resolvedTitle"
          ></h2>
          <p
            class="program-about-block__description"
            v-html="resolvedDescription"
          ></p>
        </div>

        <div class="program-about-block__stats">
          <div class="program-about-block__stats-col">
            <div
              v-for="(stat, idx) in leftStats"
              :key="`left-${idx}`"
              class="program-about-block__stat"
            >
              <span class="program-about-block__stat-value">{{ stat.value }}</span>
              <span class="program-about-block__stat-label">{{ stat.label }}</span>
            </div>
          </div>

          <div class="program-about-block__stats-col program-about-block__stats-col--right">
            <div
              v-for="(stat, idx) in rightStats"
              :key="`right-${idx}`"
              class="program-about-block__stat"
            >
              <span class="program-about-block__stat-value">{{ stat.value }}</span>
              <span class="program-about-block__stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  stats: {
    type: Array,
    default: null,
  },
})

const defaultStats = [
  { value: '15+', label: 'лет опыта работы' },
  { value: '400+', label: 'компаний-партнеров' },
  { value: '100%', label: 'официальные документы гос.образца' },
  { value: '7000+', label: 'обучившихся' },
]

const resolvedTitle = computed(() =>
  props.title || 'Учебный центр<br>«Автотехнологии»',
)

const resolvedDescription = computed(() =>
  props.description
  || 'включен в официальный Перечень учебных организаций, осуществляющих дополнительное обучение в области профессиональной компетентности международных автомобильных перевозчиков, который размещен <a href="#">на сайте Росавтотранса</a> (раздел Перечень).',
)

const resolvedStats = computed(() =>
  props.stats == null ? defaultStats : props.stats,
)

const leftStats = computed(() => {
  const list = resolvedStats.value || []
  return list.slice(0, Math.ceil(list.length / 2))
})

const rightStats = computed(() => {
  const list = resolvedStats.value || []
  return list.slice(Math.ceil(list.length / 2))
})
</script>
