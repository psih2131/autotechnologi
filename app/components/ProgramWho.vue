<template>
  <section class="program-who">
    <div class="container">
      <h2 class="program-who__title">Кому подходит обучение</h2>

      <div class="program-who__grid">
        <article
          v-for="(item, idx) in items"
          :key="idx"
          class="program-who__card"
        >
          <img v-if="item.image" :src="item.image" alt="" class="program-who__card-img">
          <div class="program-who__card-overlay"></div>
          <p class="program-who__card-text" v-html="item.text"></p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
