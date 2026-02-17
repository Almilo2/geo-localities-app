<template>
  <div class="min-h-screen bg-gray-50">

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

      <div v-else-if="locality">

        <LocalityHeader
            :id="locality.id"
            :name="locality.name"
            :name-en="locality.name_en"
        />

        <div
            v-if="locality.latitude && locality.longitude"
            class="mb-6 overflow-hidden rounded-xl border border-gray-200"
        >
          <LocalityMap
              :latitude="locality.latitude"
              :longitude="locality.longitude"
              :label="locality.name_en || locality.name || 'Locality'"
          />
        </div>
        <div
            v-else
            class="mb-6 rounded border border-dashed border-gray-300
                 p-8 text-center text-sm text-gray-400"
        >
          No coordinates available for this locality
        </div>

        <LocalityDetails
            :number="locality.number"
            :country-name="countryName"
            :elevation="locality.elevation"
            :depth="locality.depth"
            :latitude="locality.latitude"
            :longitude="locality.longitude"
            :stratigraphy-top="locality.stratigraphy_top_text"
            :stratigraphy-base="locality.stratigraphy_base_text"
            :last-updated="formattedDate"
            :remarks="locality.remarks"
            :remarks-location="locality.remarks_location"
        />

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Locality, Country } from '~/types/locality'

const route = useRoute()
const id = route.params.id as string

const { data: locality, pending, error } = await useAsyncData(
    `locality-${id}`,
    () => $fetch<Locality>(
        `https://rwapi.geoloogia.info/api/v1/public/localities/${id}/?expand=country`
    )
)

const countryName = computed(() => {
  if (!locality.value?.country) return null
  if (typeof locality.value.country === 'object') {
    return (locality.value.country as Country).name_en
        || (locality.value.country as Country).name
  }
  return null
})

const formattedDate = computed(() => {
  if (!locality.value?.date_changed) return null
  return new Date(locality.value.date_changed).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
})
</script>
