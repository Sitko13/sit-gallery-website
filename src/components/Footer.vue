<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="brand-gradient-bg py-8">
    <div class="container mx-auto text-center px-4 text-brand-dark">
      
      <div class="flex justify-center space-x-6 mb-4">
        <a href="#" aria-label="Instagram" class="hover:opacity-75 transition-opacity">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.011-4.85-.069c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.161 0-3.528.012-4.76.069-2.784.127-4.053 1.4-4.181 4.181-.057 1.231-.068 1.598-.068 4.76s.011 3.528.068 4.76c.127 2.783 1.398 4.053 4.181 4.181 1.232.057 1.6.068 4.76.068s3.528-.011 4.76-.068c2.783-.128 4.053-1.398 4.181-4.181.057-1.232.068-1.6.068-4.76s-.011-3.528-.068-4.76c-.128-2.783-1.398-4.053-4.181-4.181-1.231-.057-1.599-.068-4.76-.068zm0 5.48c-1.954 0-3.519 1.565-3.519 3.519s1.565 3.519 3.519 3.519 3.519-1.565 3.519-3.519-1.565-3.519-3.519-3.519zm0 5.598c-1.153 0-2.079-.926-2.079-2.079s.926-2.079 2.079-2.079 2.079.926 2.079 2.079-.926 2.079-2.079 2.079zm4.332-6.52c-.598 0-1.082.484-1.082 1.082s.484 1.082 1.082 1.082 1.082-.484 1.082-1.082-.484-1.082-1.082-1.082z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Facebook" class="hover:opacity-75 transition-opacity">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </div>

      <p class="text-sm">
        &copy; {{ currentYear }} SIT Gallery. All rights reserved.
      </p>

    </div>
  </footer>
</template>

