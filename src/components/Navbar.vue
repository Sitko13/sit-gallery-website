<template>
  <nav class="brand-gradient-bg shadow-md w-full py-4 px-8 fixed top-0 z-30">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#home" class="text-xl font-bold text-brand-dark">
        SIT Gallery
      </a>
      
      <div class="hidden md:flex space-x-8">
        <a href="#home" class="text-brand-dark hover:opacity-75 transition-opacity">HOME</a>
        <a href="#about" class="text-brand-dark hover:opacity-75 transition-opacity">ABOUT</a>
        <a href="#work" class="text-brand-dark hover:opacity-75 transition-opacity">WORK</a>
        <a href="#contact" class="text-brand-dark hover:opacity-75 transition-opacity">CONTACT</a>
      </div>

      <div class="md:hidden">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen">
          <svg v-if="isMobileMenuOpen" class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          <svg v-else class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </nav>

  <transition name="fade">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 brand-gradient-bg z-20 flex flex-col items-center justify-center space-y-8">
        <a @click="closeMenu" href="#home" class="text-brand-dark text-3xl font-bold">HOME</a>
        <a @click="closeMenu" href="#about" class="text-brand-dark text-3xl font-bold">ABOUT</a>
        <a @click="closeMenu" href="#work" class="text-brand-dark text-3xl font-bold">WORK</a>
        <a @click="closeMenu" href="#contact" class="text-brand-dark text-3xl font-bold">CONTACT</a>
      </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';

// Premenná ("prepínač"), ktorá sleduje stav mobilného menu
const isMobileMenuOpen = ref(false);

// Funkcia na zatvorenie menu (napr. po kliknutí na link)
const closeMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Jednoduchá animácia pre plynulé zobrazenie menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>