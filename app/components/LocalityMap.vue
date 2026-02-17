<template>
  <div id="locality-map" class="h-64 w-full" />
</template>

<script setup lang="ts">
const props = defineProps<{
  latitude: number
  longitude: number
  label: string
}>()

onMounted(async () => {
  const L = (await import('leaflet')).default
  await import('leaflet/dist/leaflet.css')

  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })

  const map = L.map('locality-map').setView(
      [props.latitude, props.longitude], 13
  )

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  L.marker([props.latitude, props.longitude])
      .addTo(map)
      .bindPopup(props.label)
      .openPopup()
})
</script>
