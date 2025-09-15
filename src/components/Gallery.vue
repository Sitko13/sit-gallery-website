<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import VueEasyLightbox from 'vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js';
const swiperBreakpoints = {
  0: { slidesPerView: 1.5, spaceBetween: 10 },
  768: { slidesPerView: 3, spaceBetween: -40 },
  1280: { slidesPerView: 5, spaceBetween: -60 }
}
const initialImages = Object.entries(import.meta.glob('@/assets/gallery_images/*.{jpg,jpeg,png,svg}', { eager: true }))
  .map(([path, module], index) => {
    const fileName = path.split('/').pop().replace(/\.\w+$/, '');
    return {
      id: index + 1,
      url: module.default,
      alt: fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      title: fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    };
  });
const images = ref(initialImages);
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);
const imageUrls = computed(() => images.value.map(image => image.url));
const showLightbox = (index) => {
  const clickedImageUrl = images.value[index].url;
  const realIndex = initialImages.findIndex(img => img.url === clickedImageUrl);
  lightboxIndex.value = realIndex;
  lightboxVisible.value = true;
};
const hideLightbox = () => {
  lightboxVisible.value = false;
};
</script>

<template>
  <div class="gallery-container">
    <swiper
      :breakpoints="swiperBreakpoints"
      :centered-slides="true"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Pagination, Navigation, Mousewheel]"
      :mousewheel="{ forceToAxis: true, releaseOnEdges: true }"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="image.id">
        <div class="slide-content" @click="showLightbox(index)">
          <img :src="image.url" :alt="image.alt" class="gallery-image">
        </div>
      </swiper-slide>
    </swiper>

    <Teleport to="body">
      <vue-easy-lightbox
        :visible="lightboxVisible"
        :imgs="imageUrls"
        :index="lightboxIndex"
        @hide="hideLightbox"
        :no-zoom-on-scroll="true"
        :toolbar="['prev', 'next', 'close']"
      ></vue-easy-lightbox>
    </Teleport>
    
  </div>
</template>

<style scoped>
.gallery-container { padding: 3rem 0; overflow: hidden; }
.swiper { padding: 20px !important; transform-style: preserve-3d; }
.swiper-slide { transition: transform 0.4s ease, opacity 0.4s ease; transform: scale(0.8); opacity: 0.5; z-index: 1; }
.swiper-slide.swiper-slide-active { transform: scale(1); opacity: 1; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border-radius: 8px; z-index: 10; }
.slide-content { cursor: pointer; width: 100%; }
.gallery-image { width: 100%; height: 400px; object-fit: cover; border-radius: 8px; }
:deep(.swiper-button-next), :deep(.swiper-button-prev) { color: #2E2E2A; }
:deep(.swiper-pagination-bullet-active) { background-color: #2E2E2A; }
</style>