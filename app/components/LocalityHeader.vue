<template>
  <div class="mb-6">
    <p class="text-xs text-blue-500 uppercase tracking-wide mb-1">
      Locality #{{ id }}
    </p>
    <h1 class="text-2xl font-bold text-gray-900">
      {{ nameEn || name }}
    </h1>
    <p
        v-if="nameEn && name !== nameEn"
        class="text-sm text-gray-500 mt-1"
    >
      {{ name }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  name: string
  nameEn: string | null
}>()
</script>
