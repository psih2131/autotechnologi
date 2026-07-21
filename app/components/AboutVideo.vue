<template>
  <section class="about-video-section">
    <div class="container">
      <div class="about-video">
        <iframe
          :src="src"
          title="Видео об учебном центре"
          class="about-video__iframe"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>
