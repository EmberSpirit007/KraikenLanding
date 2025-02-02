<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import KFooter from '@/components/KFooter.vue'
import KNavbar from '@/components/KNavbar.vue'
</script>

<template>
<k-navbar />
  <main>
            <RouterView />
  </main>
<k-footer />
</template>
