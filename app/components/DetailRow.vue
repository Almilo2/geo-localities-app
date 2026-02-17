<template>
  <div v-if="value" class="rounded bg-white border border-gray-200 p-3">
    <p class="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{{ label }}</p>
    <p class="text-sm font-medium text-gray-800">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string | null | undefined
}>()
</script>
