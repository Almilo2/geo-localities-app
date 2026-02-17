<template>
  <header class="bg-stone-900 border-b border-stone-700 sticky top-0 z-10">
    <div
        class="mx-auto max-w-6xl px-4 py-5
             flex flex-col gap-4
             sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-xl font-bold text-stone-50 tracking-tight">
          Geo Localities
        </h1>
        <p class="text-xs text-stone-500 mt-0.5">
          Estonian Geological Survey
        </p>
      </div>
      <SearchBar :model-value="searchQuery" @search="$emit('search', $event)" />
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ searchQuery: string }>()
defineEmits<{ (e: 'search', query: string): void }>()
</script>
