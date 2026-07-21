<template>
  <section class="home-faq-section">
    <div class="container">
      <h2 v-if="title" class="home-faq__title">{{ title }}</h2>
      <div v-if="items.length" class="home-faq__list">
        <HomeFaqItem
          v-for="(item, idx) in items"
          :key="idx"
          :question="item.question"
          :answer="item.answer"
          :open="openIndex === idx"
          @toggle="toggle(idx)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  items: { type: Array, default: () => [] },
})

const openIndex = ref(-1)

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>
