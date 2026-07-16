<template>
  <section class="program-who">
    <div class="container">
      <h2 class="program-who__title">Кому подходит обучение</h2>

      <div class="program-who__grid">
        <article
          v-for="(item, idx) in whoItems"
          :key="idx"
          class="program-who__card"
        >
          <img :src="item.image" alt="" class="program-who__card-img">
          <div class="program-who__card-overlay"></div>
          <p class="program-who__card-text" v-html="item.text"></p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import whoImg1 from '~/assets/images/who/x1.jpg'
import whoImg2 from '~/assets/images/who/x2.jpg'
import whoImg3 from '~/assets/images/who/x3.jpg'
import whoImg4 from '~/assets/images/who/x4.jpg'
import whoImg5 from '~/assets/images/who/x5.jpg'
import whoImg6 from '~/assets/images/who/x6.jpg'

const whoItems = [
  { image: whoImg1, text: '<strong>Водителям</strong> организаций и предприятий' },
  { image: whoImg2, text: '<strong>Сотрудникам</strong> транспортных компаний' },
  { image: whoImg3, text: '<strong>Специалистам</strong>, связанным с эксплуатацией транспорта' },
  { image: whoImg4, text: 'Корпоративным <strong>автопаркам</strong>' },
  { image: whoImg5, text: '<strong>Сотрудникам</strong>, регулярно использующим транспорт в работе' },
  { image: whoImg6, text: '<strong>Организациям</strong>, заинтересованным в повышении безопасности перевозок' },
]
</script>
