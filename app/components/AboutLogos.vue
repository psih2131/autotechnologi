<template>
  <section class="about-logos-section">
    <div class="about-logos">
      <img
        v-for="(logo, idx) in logos"
        :key="idx"
        :src="logo"
        alt=""
        class="about-logos__img"
      >
    </div>
  </section>
</template>

<script setup>
import logo1 from '~/assets/images/logos/x1.png'
import logo2 from '~/assets/images/logos/x2.png'
import logo3 from '~/assets/images/logos/x3.png'
import logo4 from '~/assets/images/logos/x4.png'
import logo5 from '~/assets/images/logos/x5.png'
import logo6 from '~/assets/images/logos/x6.png'
import logo7 from '~/assets/images/logos/x7.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]
</script>
