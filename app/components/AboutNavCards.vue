<template>
  <section class="about-nav-section">
    <div class="container">
      <div class="about-nav">
        <a
          v-for="(item, idx) in navItems"
          :key="idx"
          :href="item.href"
          class="about-nav__card"
        >
          <span class="about-nav__card-title">{{ item.title }}</span>
          <span class="about-nav__card-arrow" aria-hidden="true">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.36328C0.447715 8.36328 0 7.91557 0 7.36328C0 6.811 0.447715 6.36328 1 6.36328L1 7.36328L1 8.36328ZM15.7071 6.65617C16.0976 7.0467 16.0976 7.67986 15.7071 8.07039L9.34315 14.4343C8.95262 14.8249 8.31946 14.8249 7.92893 14.4343C7.53841 14.0438 7.53841 13.4107 7.92893 13.0201L13.5858 7.36328L7.92893 1.70643C7.53841 1.3159 7.53841 0.682738 7.92893 0.292213C8.31946 -0.0983109 8.95262 -0.0983109 9.34315 0.292213L15.7071 6.65617ZM1 7.36328L1 6.36328L15 6.36328V7.36328V8.36328L1 8.36328L1 7.36328Z" fill="#3D558F"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const navItems = [
  { title: 'Наши преимущества', href: '#' },
  { title: 'Материально-техническая база', href: '#' },
  { title: 'Сведения об образовательной организации', href: '#' },
]
</script>
