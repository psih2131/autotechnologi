<template>
  <section class="program-curriculum">
    <div class="container">
      <h2 class="program-curriculum__title">Программа обучения</h2>

      <div class="program-curriculum__grid">
        <article
          v-for="(block, idx) in blocks"
          :key="idx"
          class="program-curriculum__block"
          :class="{ 'program-curriculum__block--white': block.white }"
        >
          <span class="program-curriculum__block-label">{{ block.label }}</span>
          <span class="program-curriculum__block-divider" aria-hidden="true"></span>
          <h3 class="program-curriculum__block-title">{{ block.title }}</h3>
          <p class="program-curriculum__block-text">{{ block.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blocks: {
    type: Array,
    default: () => [],
  },
})
</script>
