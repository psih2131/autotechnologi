<template>
  <section class="about-map-section">
    <div class="container">
      <div class="about-map">
        <div class="about-map__placeholder" aria-label="Карта — скоро будет добавлена">
          <div class="about-map__placeholder-inner">
            <span class="about-map__placeholder-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#3D558F"/>
              </svg>
            </span>
            <p class="about-map__placeholder-text">Здесь будет карта</p>
          </div>
        </div>

        <div class="about-map__branches">
          <div class="about-map__branches-inner">
            <h2
              v-if="title"
              class="about-map__branches-title"
              v-html="title"
            ></h2>

            <div class="about-map__branches-list">
              <div
                v-for="(branch, idx) in branches"
                :key="idx"
                class="about-map__branch"
              >
                <div class="about-map__branch-head">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0028 14.1675C9.87281 14.1675 8.13281 12.4375 8.13281 10.2975C8.13281 8.1575 9.87281 6.4375 12.0028 6.4375C14.1328 6.4375 15.8728 8.1675 15.8728 10.3075C15.8728 12.4475 14.1328 14.1675 12.0028 14.1675ZM12.0028 7.9375C10.7028 7.9375 9.63281 8.9975 9.63281 10.3075C9.63281 11.6175 10.6928 12.6775 12.0028 12.6775C13.3128 12.6775 14.3728 11.6175 14.3728 10.3075C14.3728 8.9975 13.3028 7.9375 12.0028 7.9375Z" fill="#3D558F"/>
                  <path d="M12.0016 22.76C10.5216 22.76 9.03164 22.2 7.87164 21.09C4.92164 18.25 1.66164 13.72 2.89164 8.33C4.00164 3.44 8.27164 1.25 12.0016 1.25C12.0016 1.25 12.0016 1.25 12.0116 1.25C15.7416 1.25 20.0116 3.44 21.1216 8.34C22.3416 13.73 19.0816 18.25 16.1316 21.09C14.9716 22.2 13.4816 22.76 12.0016 22.76ZM12.0016 2.75C9.09164 2.75 5.35164 4.3 4.36164 8.66C3.28164 13.37 6.24164 17.43 8.92164 20C10.6516 21.67 13.3616 21.67 15.0916 20C17.7616 17.43 20.7216 13.37 19.6616 8.66C18.6616 4.3 14.9116 2.75 12.0016 2.75Z" fill="#3D558F"/>
                  </svg>

                  <p class="about-map__branch-city">{{ branch.city }}</p>
                </div>
                <p class="about-map__branch-address">{{ branch.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  branches: {
    type: Array,
    default: () => [],
  },
})
</script>
