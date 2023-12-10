<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import VoucherCard from "../components/voucher/VoucherCard.vue"



const voucher = ref([]);

async function getVoucherData() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/voucher?status=unclaimed&kategori=kategori_c')
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
        <h2 class="mb-5 text-3xl font-bold text-left text-red-600 dark:text-black">Voucher | {{ voucher.length }} Data</h2>
        <div v-if="voucher && voucher.length" class="grid grid-cols-3 gap-4">
            <VoucherCard v-for="voc in voucher" :key="voc.id" :nama="voc.nama" :kategori="voc.kategori" />
        </div>

        <div v-else class="text-center">
            <p>Data voucher tidak tersedia.</p>
        </div>

    </div>
</template>




