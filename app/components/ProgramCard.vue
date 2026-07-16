<template>
  <article class="programs-card">
    <div class="programs-card__header">
      <div class="programs-card__category">
        <span class="programs-card__category-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" rx="5" fill="#FFBB00"/>
          <path d="M9.23837 20.4187C8.85698 20.4187 8.5407 20.1024 8.5407 19.721V17.7954C8.5407 17.414 8.85698 17.0977 9.23837 17.0977C9.61977 17.0977 9.93605 17.414 9.93605 17.7954V19.721C9.93605 20.1117 9.61977 20.4187 9.23837 20.4187Z" fill="white"/>
          <path d="M14 20.4186C13.6186 20.4186 13.3023 20.1023 13.3023 19.7209V15.8605C13.3023 15.4791 13.6186 15.1628 14 15.1628C14.3814 15.1628 14.6977 15.4791 14.6977 15.8605V19.7209C14.6977 20.1116 14.3814 20.4186 14 20.4186Z" fill="white"/>
          <path d="M18.7616 20.4187C18.3802 20.4187 18.064 20.1024 18.064 19.721V13.935C18.064 13.5536 18.3802 13.2373 18.7616 13.2373C19.143 13.2373 19.4593 13.5536 19.4593 13.935V19.721C19.4593 20.1117 19.1523 20.4187 18.7616 20.4187Z" fill="white"/>
          <path d="M9.23501 15.0975C8.91873 15.0975 8.63966 14.8836 8.55594 14.5673C8.46291 14.1952 8.68617 13.8138 9.06756 13.7208C12.4908 12.865 15.5048 10.9952 17.8024 8.32542L18.2304 7.82309C18.4815 7.53472 18.9187 7.49751 19.2164 7.74867C19.5048 7.99983 19.542 8.43704 19.2908 8.73472L18.8629 9.23704C16.3792 12.1394 13.1048 14.158 9.40245 15.0789C9.34663 15.0975 9.29082 15.0975 9.23501 15.0975Z" fill="white"/>
          <path d="M18.7605 11.693C18.3791 11.693 18.0628 11.3767 18.0628 10.9953V8.97674H16.0349C15.6535 8.97674 15.3372 8.66047 15.3372 8.27907C15.3372 7.89767 15.6535 7.5814 16.0349 7.5814H18.7605C19.1419 7.5814 19.4581 7.89767 19.4581 8.27907V11.0047C19.4581 11.386 19.1512 11.693 18.7605 11.693Z" fill="white"/>
          <path d="M16.7907 24H11.2093C6.15814 24 4 21.8419 4 16.7907V11.2093C4 6.15814 6.15814 4 11.2093 4H16.7907C21.8419 4 24 6.15814 24 11.2093V16.7907C24 21.8419 21.8419 24 16.7907 24ZM11.2093 5.39535C6.92093 5.39535 5.39535 6.92093 5.39535 11.2093V16.7907C5.39535 21.0791 6.92093 22.6047 11.2093 22.6047H16.7907C21.0791 22.6047 22.6047 21.0791 22.6047 16.7907V11.2093C22.6047 6.92093 21.0791 5.39535 16.7907 5.39535H11.2093Z" fill="white"/>
          </svg>

        </span>
        <span class="programs-card__category-text">{{ category }}</span>
      </div>

      <span class="programs-card__status">
        <span class="programs-card__status-dot" aria-hidden="true"></span>
        {{ status }}
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
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Запись открыта',
  },
  hit: {
    type: Boolean,
    default: false,
  },
})
</script>
