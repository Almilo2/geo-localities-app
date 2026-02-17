<template>
  <div class="w-full max-w-lg">
    <input
        v-model="localQuery"
        type="text"
        placeholder="Search by name..."
        class="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
        @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'search', query: string): void }>()

const localQuery = ref(props.modelValue)
let debounceTimer: ReturnType<typeof setTimeout>

function onInput() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    emit('search', localQuery.value)
  }, 400)
}
</script>
