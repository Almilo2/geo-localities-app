<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
    <div
        class="mx-auto max-w-6xl px-4 py-4
             flex flex-col gap-3
             sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-lg font-semibold text-gray-900">Geo Localities</h1>
        <p class="text-xs text-gray-400">Estonian Geological Survey</p>
      </div>
      <SearchBar :model-value="searchQuery" @search="$emit('search', $event)" />
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ searchQuery: string }>()
defineEmits<{ (e: 'search', query: string): void }>()
</script>
