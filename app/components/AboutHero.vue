<template>
  <section class="about-hero">
    <div class="container about-hero__container">
      <nav class="about-hero__breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span class="about-hero__breadcrumbs-sep">/</span>
        <span>Об учебном центре</span>
      </nav>

      <div class="about-hero__body">
        <div class="about-hero__content">
          <h1 class="about-hero__title">Центр дистанционного образования «Автотехнологии»</h1>
          <p class="about-hero__description">
            Учебный центр «Автотехнологии» реализует программы профессионального обучения,
            повышения квалификации и профессиональной переподготовки для специалистов транспортной,
            производственной и технической сфер.
          </p>
        </div>
      </div>
    </div>

    <div class="about-hero__docs" aria-hidden="true">
      <img :src="doc1" alt="" class="about-hero__doc about-hero__doc--back">
      <img :src="doc2" alt="" class="about-hero__doc about-hero__doc--front">
    </div>
  </section>
</template>

<script setup>
import doc1 from '~/assets/images/docs/doc-about-1.png'
import doc2 from '~/assets/images/docs/doc-about-2.png'
</script>
