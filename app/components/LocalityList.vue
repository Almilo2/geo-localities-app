<template>
  <div>

    <p class="mb-4 text-sm text-gray-500">
      <span v-if="loading">Loading...</span>
      <span v-else>{{ count.toLocaleString() }} localities found</span>
    </p>

    <div
        v-if="error"
        class="mb-4 rounded border border-red-200 bg-red-50 p-4 text-sm text-red-700"
    >
      {{ error }}
      <button class="ml-2 underline" @click="$emit('retry')">Retry</button>
    </div>

    <div
        v-else-if="loading"
        class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
          v-for="n in 12"
          :key="n"
          class="h-24 rounded-lg bg-gray-200 animate-pulse"
      />
    </div>

    <div
        v-else-if="localities.length === 0"
        class="py-16 text-center text-gray-400"
    >
      <p class="text-lg font-medium">No localities found</p>
      <p class="text-sm mt-1">Try a different search term</p>
    </div>

    <div
        v-else
        class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      <LocalityCard
          v-for="locality in localities"
          :key="locality.id"
          :locality="locality"
      />
    </div>

    <div v-if="totalPages > 1" class="mt-8">
      <PaginationControls
          :current-page="currentPage"
          :total-pages="totalPages"
          @change="$emit('page-change', $event)"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Locality } from '~/types/locality'

defineProps<{
  localities: Locality[]
  count: number
  loading: boolean
  error: string | null
  currentPage: number
  totalPages: number
}>()

defineEmits<{
  (e: 'retry'): void
  (e: 'page-change', page: number): void
}>()
</script>
