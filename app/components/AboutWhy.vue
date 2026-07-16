<template>
  <section class="about-why-section">
    <div class="container">
      <h2 class="about-why__title">Почему выбирают «Автотехнологии»</h2>

      <div class="about-why__grid">
        <div class="about-why__main">
          <div class="about-why__row about-why__row--top">
            <div class="about-why__card about-why__card--programs">
              <div class="about-why__programs-head">
                <div class="about-why__programs-stat">
                  <span class="about-why__stat-value">300+</span>
                  <span class="about-why__stat-label">программ обучения</span>
                </div>
                <div class="about-why__avatars">
                  <img
                    v-for="(avatar, idx) in avatars"
                    :key="idx"
                    :src="avatar"
                    alt=""
                    class="about-why__avatar"
                  >
                </div>
              </div>
              <p class="about-why__card-text about-why__card-text--bottom">
                Повышение квалификации, профессиональная переподготовка, рабочие профессии и обязательное
                обучение для специалистов и организаций.
              </p>
            </div>

            <div class="about-why__card about-why__card--format">
              <h3 class="about-why__card-title">Дистанционный формат обучения</h3>
              <p class="about-why__card-text">
                Проходите обучение<br>без отрыва от работы<br>из любого региона.
              </p>
            </div>
          </div>

          <div class="about-why__row about-why__row--bottom">
            <div class="about-why__card about-why__card--docs">
              <h3 class="about-why__card-title">Документы установленного образца</h3>
              <p class="about-why__card-text">
                Выдаём удостоверения, дипломы<br>и свидетельства в соответствии<br>с программой обучения.
              </p>
            </div>

            <div class="about-why__card about-why__card--frdo">
              <div class="about-why__frdo-head">
                <img :src="frdoEmblem" alt="" class="about-why__frdo-emblem">
                <h3 class="about-why__card-title">Внесение документов<br>в ФИС ФРДО</h3>
              </div>
              <p class="about-why__card-text">
                Информация о выданных удостоверениях и дипломах передаётся в государственный реестр
                документов об образовании.
              </p>
            </div>
          </div>
        </div>

        <div class="about-why__card about-why__card--help">
          <h3 class="about-why__card-title about-why__card-title--light">
            Помогаем разобраться<br>с требованиями и подобрать<br>необходимое обучение
          </h3>
          <p class="about-why__card-text about-why__card-text--light">
            Консультируем по программам, срокам, документам и формату обучения.
          </p>
          <div class="about-why__docs" aria-hidden="true">
            <img :src="doc1" alt="" class="about-why__doc about-why__doc--back">
            <img :src="doc2" alt="" class="about-why__doc about-why__doc--front">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import doc1 from '~/assets/images/docs/doc-about-1.png'
import doc2 from '~/assets/images/docs/doc-about-2.png'
import frdoEmblem from '~/assets/images/gos4.png'

import avatar1 from '~/assets/images/who/x1.jpg'
import avatar2 from '~/assets/images/who/x2.jpg'
import avatar3 from '~/assets/images/who/x3.jpg'
import avatar4 from '~/assets/images/who/x4.jpg'

const avatars = [avatar1, avatar2, avatar3, avatar4]
</script>
