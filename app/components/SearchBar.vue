<template>
  <div class="w-full max-w-lg">
    <input
        v-model="localQuery"
        type="text"
        placeholder="Search by name..."
        class="w-full rounded border border-stone-600
             bg-stone-700 px-3 py-2 text-sm text-stone-100
             placeholder-stone-400
             focus:border-stone-400 focus:outline-none"
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
