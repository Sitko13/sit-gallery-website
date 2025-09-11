<template>
  <div class="bg-gray-50 flex flex-col min-h-screen">
    <Navbar />
    
    <main class="flex-grow">
      <section id="home">
        <Hero />
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="work" data-aos="fade-up">
        <Gallery />
      </section>

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'; // Importujeme 'onMounted'
import AOS from 'aos';           // Importujeme knižnicu AOS
import 'aos/dist/aos.css';      // Importujeme CSS štýly pre AOS

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// Inicializujeme AOS, keď sa komponent načíta
onMounted(() => {
  AOS.init({
    duration: 800,    // Trvanie animácie v milisekundách
    once: true,       // Či sa má animácia spustiť iba raz
    offset: 200,      // Posun od spodku obrazovky, kedy sa má animácia spustiť
  });
})
</script>