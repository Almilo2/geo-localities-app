<template>
  <div class="flex items-center justify-center gap-2">

    <button
        :disabled="currentPage === 1"
        class="rounded border px-3 py-1.5
             text-sm text-gray-600 transition
             hover:bg-gray-100
             disabled:opacity-40 disabled:cursor-not-allowed"
        @click="$emit('change', currentPage - 1)"
    >
      Previous
    </button>

    <span class="text-sm text-gray-500">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <button
        :disabled="currentPage === totalPages"
        class="rounded border px-3 py-1.5
             text-sm text-gray-600 transition
             hover:bg-gray-100
             disabled:opacity-40 disabled:cursor-not-allowed"
        @click="$emit('change', currentPage + 1)"
    >
      Next
    </button>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

defineEmits<{ (e: 'change', page: number): void }>()
</script>
