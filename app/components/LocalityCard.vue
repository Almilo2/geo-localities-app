<template>
  <NuxtLink
      :to="`/localities/${locality.id}`"
      class="block rounded-lg border border-gray-200
           bg-white p-4 transition duration-150
           hover:border-stone-400 hover:shadow-sm"
  >
    <div class="min-w-0">
      <p class="text-xs text-stone-400 mb-1 font-mono">#{{ locality.id }}</p>
      <h2 class="text-sm font-semibold text-stone-800 truncate leading-snug">
        {{ locality.name_en || locality.name }}
      </h2>
      <p
          v-if="locality.name_en && locality.name !== locality.name_en"
          class="text-xs text-stone-400 truncate mt-0.5 italic"
      >
        {{ locality.name }}
      </p>
    </div>

    <div class="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 text-xs text-stone-500">
      <span v-if="countryName"
            class="rounded-full bg-stone-100 px-2.5 py-0.5 font-medium">
        {{ countryName }}
      </span>
      <span v-if="locality.elevation"
            class="rounded-full bg-stone-100 px-2.5 py-0.5">
        {{ locality.elevation }} m elevation
      </span>
      <span v-if="locality.depth"
            class="rounded-full bg-stone-100 px-2.5 py-0.5">
        {{ locality.depth }} m depth
      </span>
      <span v-if="locality.latitude && locality.longitude"
            class="rounded-full bg-stone-100 px-2.5 py-0.5">
        Has coordinates
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Locality, Country } from '~/types/locality'

const props = defineProps<{ locality: Locality }>()

const countryName = computed(() => {
  if (!props.locality.country) return null
  if (typeof props.locality.country === 'object') {
    return (props.locality.country as Country).name_en
        || (props.locality.country as Country).name
  }
  return null
})
</script>
