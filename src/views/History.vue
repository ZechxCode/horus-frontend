<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";

import TableHistory from "../components/voucher/TableHistory.vue"



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



const userStore = useUserStore()
const getUser = computed(() => userStore.getUser)
const isLoggedin = computed(() => userStore.isLoggedIn)

onMounted(() => {
    getVoucherData(), userStore.fetchUser()
})


</script>

<template>
    <div v-if="isLoggedin" class="container">
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
                            <TableHistory v-for="voc in voucher" :key="voc.id" :id="voc.id" :nama="voc.nama"
                                :kategori="voc.kategori" :foto="voc.foto" :getVoc="getVoucherData" />
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
    <div v-else class="text-center">
        <p>Data voucher tidak tersedia. Silahkan Klik Login Di Kanan Atas</p>
    </div>
</template>




