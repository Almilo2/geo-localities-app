<template>
  <div>
    <header class="bg-stone-800 border-b border-stone-700">
      <div class="mx-auto max-w-3xl px-4 py-4">
        <NuxtLink to="/" class="text-sm text-stone-300 hover:text-stone-100">
          Back to list
        </NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-4 py-6">
      <div v-if="pending" class="space-y-4">
        <div class="h-8 w-2/3 rounded-lg bg-gray-200 animate-pulse" />
        <div class="h-4 w-1/3 rounded-lg bg-gray-200 animate-pulse" />
        <div class="h-64 rounded-xl bg-gray-200 animate-pulse" />
      </div>

      <div
          v-else-if="error"
          class="rounded border border-red-200 bg-red-50 p-6 text-red-700"
      >
        Could not load this locality. It may not exist.
      </div>

      <slot v-else />
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pending: boolean
  error: Error | null
}>()
</script>
