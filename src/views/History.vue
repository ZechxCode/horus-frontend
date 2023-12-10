<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import VoucherCard from "../components/voucher/VoucherCard.vue"



const voucher = ref([]);

async function getVoucherData() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/voucher?status=claimed')
        console.log(response.data.data)
        voucher.value = response.data.data
    } catch (error) {
        console.error(error)
    }


}

onMounted(() => {
    getVoucherData()
})


</script>

<template>
    <div class="container">
        <h2 class="mb-5 text-3xl font-bold text-left text-red-600 dark:text-black">{{ voucher.length }} voucher claimed</h2>
        <div v-if="voucher && voucher.length" class="">
            <div class="container mx-auto mt-5 px-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-center text-gray-500 table-fixed">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="voc in voucher" :key="voc.id" class="bg-white border-b">
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <!-- SVG content for icon -->
                                            </svg>
                                        </div>
                                        {{ voc.nama }}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <!-- SVG content for icon -->
                                            </svg>
                                        </div>
                                        {{ voc.kategori }}
                                    </div>
                                </td>
                                <td class="flex items-center justify-center px-6 py-4">
                                    <button
                                        class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <!-- SVG content for remove icon -->
                                        </svg>
                                        Remove
                                    </button>
                                </td>

                            </tr>
                            <!-- Duplicate the tr above for every row you need -->
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        <div v-else class="text-center">
            <p>Data voucher tidak tersedia.</p>
        </div>

    </div>
</template>




