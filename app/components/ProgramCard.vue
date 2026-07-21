<template>
  <article class="programs-card">
    <div class="programs-card__header">
      <div class="programs-card__category">
        <span class="programs-card__category-icon" aria-hidden="true">
          <img
            v-if="categoryIcon"
            :src="categoryIcon"
            alt=""
            width="28"
            height="28"
          >
        </span>
        <span class="programs-card__category-text">{{ category }}</span>
      </div>

      <span
        class="programs-card__status"
        :class="{ 'programs-card__status--closed': !registrationOpen }"
      >
        <span class="programs-card__status-dot" aria-hidden="true"></span>
        {{ registrationOpen ? 'Запись открыта' : 'Запись закрыта' }}
      </span>
    </div>

    <h2 class="programs-card__title">{{ title }}</h2>
    <p class="programs-card__description">{{ description }}</p>

    <div class="programs-card__details">
      <div class="programs-card__details-inner">
        <div class="programs-card__details-inner-row">
          <div class="programs-card__detail">
            <div class="programs-card__detail-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#7E7F81" stroke-width="1.5"/>
                <path d="M12 7V12L15 14" stroke="#7E7F81" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="programs-card__detail-label">Срок обучения</span>
            </div>
            <span class="programs-card__detail-value">{{ duration }}</span>
          </div>

          <div class="programs-card__detail">
            <div class="programs-card__detail-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6H20V18H4V6Z" stroke="#7E7F81" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M8 18V20H16V18" stroke="#7E7F81" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8 9H11" stroke="#7E7F81" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8 12H14" stroke="#7E7F81" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="programs-card__detail-label">Формат обучения</span>
            </div>
            <span class="programs-card__detail-value">{{ format }}</span>
          </div>
        </div>

        

        <div v-if="hit" class="programs-card__ribbon">
          <svg width="81" height="58" viewBox="0 0 81 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76 0C78.7614 0 81 2.23858 81 5L81 55.4338C81 56.7364 79.7747 57.6914 78.5115 57.3732L40.9885 47.9222C40.6678 47.8415 40.3322 47.8415 40.0115 47.9222L2.48849 57.3732C1.22534 57.6914 0 56.7364 0 55.4338V5C0 2.23858 2.23858 0 5 0L76 0Z" fill="#4C8AFF"/>
          </svg>
          <span class="programs-card__ribbon-text">Хит<br>продаж</span>
      
        </div>


      </div>

      
    </div>

    <div class="programs-card__footer">
      <span class="programs-card__price">{{ price }}</span>
      <NuxtLink :to="to" class="programs-card__more">
        Подробнее
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
          <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: '',
  },
  categoryIcon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '',
  },
  format: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  registrationOpen: {
    type: Boolean,
    default: true,
  },
  hit: {
    type: Boolean,
    default: false,
  },
})
</script>
