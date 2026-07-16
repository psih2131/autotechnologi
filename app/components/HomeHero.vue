<template>
  <section class="home-hero">
    <div class="container home-hero__container">
      <div class="home-hero__content">
        <h1 class="home-hero__title">
          Центр дистанционного <span><br></span>образования «Автотехнологии»
        </h1>
        <p class="home-hero__text">
          Учебный центр «Автотехнологии» реализует программы профессионального обучения,
          повышения квалификации и профессиональной переподготовки для специалистов транспортной,
          производственной и технической сфер.
        </p>
        <div class="home-hero__stats">
          <div class="home-hero__avatars">
            <img
              v-for="(avatar, idx) in avatars"
              :key="idx"
              :src="avatar"
              alt=""
              class="home-hero__avatar"
            >
          </div>
          <div class="home-hero__stat home-hero__stat--programs">
            <span class="home-hero__stat-value">300+</span>
            <span class="home-hero__stat-label">программ обучения</span>
          </div>
          <div class="home-hero__stat home-hero__stat--graduates">
            <span class="home-hero__stat-value">7000+</span>
            <span class="home-hero__stat-label">обучившихся специалистов</span>
          </div>
          <div class="home-hero__stat home-hero__stat--experience">
            <span class="home-hero__stat-value">15+</span>
            <span class="home-hero__stat-label">лет опыта</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-hero__image-wrap" aria-hidden="true">
      <img :src="heroBg" alt="" class="home-hero__image">
    </div>
  </section>
</template>

<script setup>
import heroBg from '~/assets/images/home-hero-bg.png'
import avatar1 from '~/assets/images/who/x1.jpg'
import avatar2 from '~/assets/images/who/x2.jpg'
import avatar3 from '~/assets/images/who/x3.jpg'
import avatar4 from '~/assets/images/who/x4.jpg'

const avatars = [avatar1, avatar2, avatar3, avatar4]
</script>
