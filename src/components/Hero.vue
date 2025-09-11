<template>
  <section 
    class="hero-section relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="absolute inset-0 bg-black opacity-40"></div>
    
    <div class="relative z-10 text-center text-white p-4">
      <h1 class="text-5xl md:text-7xl font-serif mb-4">Lifestyle Photography</h1>
      <p class="text-lg md:text-xl uppercase tracking-widest">Capturing The Moment</p>
    </div>
  </section>
</template>

<script setup>
// 1. Naimportujeme obrázok do premennej 'heroImage'
import heroImage from '@/assets/gallery_images/photo-16.jpeg';
</script>

<style scoped>
/* 2. Z CSS pravidla sme odstránili 'background-image', pretože ho nastavujeme v šablóne */
.hero-section {
  /* Všetky ostatné štýly zostávajú */
}
</style>