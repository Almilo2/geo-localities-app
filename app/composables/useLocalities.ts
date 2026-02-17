import { ref, computed } from 'vue'
import type { LocalitiesResponse, Locality } from '~/types/locality'

const BASE_URL = 'https://rwapi.geoloogia.info/api/v1/public/localities/'

export function useLocalities() {
    const localities = ref<Locality[]>([])
    const count = ref(0)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const currentPage = ref(1)
    const pageSize = ref(20)
    const searchQuery = ref('')

    const totalPages = computed(() =>
        Math.ceil(count.value / pageSize.value)
    )

    async function fetchLocalities() {
        loading.value = true
        error.value = null

        const offset = (currentPage.value - 1) * pageSize.value

        const params = new URLSearchParams({
            limit: String(pageSize.value),
            offset: String(offset),
            expand: 'country',
        })

        if (searchQuery.value.trim()) {
            params.append('name__icontains', searchQuery.value.trim())
        }

        try {
            const data = await $fetch<LocalitiesResponse>(
                `${BASE_URL}?${params.toString()}`
            )
            localities.value = data.results
            count.value = data.count
        } catch (err) {
            error.value = 'Failed to load localities. Please try again.'
            console.error(err)
        } finally {
            loading.value = false
        }
    }

    function goToPage(page: number) {
        if (page < 1 || page > totalPages.value) return
        currentPage.value = page
        fetchLocalities()
    }

    function handleSearch(query: string) {
        searchQuery.value = query
        currentPage.value = 1
        fetchLocalities()
    }

    return {
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
    }
}
