<template>
  <div class="min-h-screen bg-gray-50">

    <AppHeader :search-query="searchQuery" @search="handleSearch" />

    <main class="mx-auto max-w-6xl px-4 py-6">
      <LocalityList
          :localities="localities"
          :count="count"
          :loading="loading"
          :error="error"
          :current-page="currentPage"
          :total-pages="totalPages"
          @retry="fetchLocalities"
          @page-change="goToPage"
      />
    </main>

  </div>
</template>

<script setup lang="ts">
import { useLocalities } from '~/composables/useLocalities'
import LocalityList from "~/components/LocalityList.vue";
import AppHeader from "~/components/AppHeader.vue";

const {
  localities,
  count,
  loading,
  error,
  currentPage,
  totalPages,
  searchQuery,
  fetchLocalities,
  goToPage,
  handleSearch,
} = useLocalities()

onMounted(() => {
  fetchLocalities()
})
</script>
