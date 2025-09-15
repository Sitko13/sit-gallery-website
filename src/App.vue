<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from './composables/useIntersectionObserver.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const activeSection = ref('');
const sections = ref([]);
const onSectionIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  AOS.init({
    duration: 600,
    once: true,
    offset: 100,
  });
  
  sections.value = document.querySelectorAll('main section');
  useIntersectionObserver(sections, onSectionIntersection);
});
</script>

<template>
  <div class="bg-gray-50 flex flex-col min-h-screen">
    <Navbar :active-section="activeSection" />
    
    <main class="flex-grow">
      <section id="home">
        <Hero />
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>
      
      <section id="work" data-aos="zoom-in-up">
        <Gallery />
      </section>

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
    </main>
    
    <Footer />
  </div>
</template>

