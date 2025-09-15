import { ref, onMounted, onUnmounted } from 'vue';

export function useIntersectionObserver(elementsToWatch, onIntersection) {
  const observer = ref(null);

  onMounted(() => {
    observer.value = new IntersectionObserver(onIntersection, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });
    elementsToWatch.value.forEach(el => {
      if (el) {
        observer.value.observe(el);
      }
    });
  });

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });
}