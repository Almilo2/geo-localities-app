<template>
  <div>

    <div class="grid gap-3 sm:grid-cols-2">
      <DetailRow label="Number" :value="number" />
      <DetailRow label="Country" :value="countryName" />
      <DetailRow label="Elevation" :value="elevation ? `${elevation} m` : null" />
      <DetailRow label="Depth" :value="depth ? `${depth} m` : null" />
      <DetailRow label="Latitude" :value="latitude?.toString()" />
      <DetailRow label="Longitude" :value="longitude?.toString()" />
      <DetailRow label="Stratigraphy Top" :value="stratigraphyTop" />
      <DetailRow label="Stratigraphy Base" :value="stratigraphyBase" />
      <DetailRow label="Last Updated" :value="lastUpdated" />
    </div>

    <div
        v-if="remarks"
        class="mt-4 rounded border border-amber-200 bg-amber-50 p-4"
    >
      <p class="text-xs font-semibold text-amber-700 uppercase mb-1">Remarks</p>
      <p class="text-sm text-amber-900">{{ remarks }}</p>
    </div>

    <div
        v-if="remarksLocation"
        class="mt-3 rounded border border-blue-200 bg-blue-50 p-4"
    >
      <p class="text-xs font-semibold text-blue-700 uppercase mb-1">Location Notes</p>
      <p class="text-sm text-blue-900">{{ remarksLocation }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import DetailRow from "~/components/DetailRow.vue";

defineProps<{
  number: string | null
  countryName: string | null
  elevation: string | null
  depth: number | null
  latitude: number | null
  longitude: number | null
  stratigraphyTop: string | null
  stratigraphyBase: string | null
  lastUpdated: string | null
  remarks: string | null
  remarksLocation: string | null
}>()
</script>
