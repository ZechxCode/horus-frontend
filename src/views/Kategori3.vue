<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";
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

const userStore = useUserStore()
const getUser = computed(() => userStore.getUser)
const isLoggedin = computed(() => userStore.isLoggedIn)

onMounted(() => {
    getVoucherData(), userStore.fetchUser()
})



</script>

<template>
    <div v-if="isLoggedin" class="container">
        <h2 class="mb-5 text-3xl font-bold text-left text-red-600 dark:text-black">Voucher | {{ voucher.length }} Data</h2>
        <div v-if="voucher && voucher.length" class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <VoucherCard v-for="voc in voucher" :key="voc.id" :id="voc.id" :nama="voc.nama" :kategori="voc.kategori"
                :foto="voc.foto" :getVoc="getVoucherData" />
        </div>

        <div v-else class="text-center">
            <p>Data voucher tidak tersedia.</p>
        </div>

    </div>
    <div v-else class="font-bold text-center mt-72">
        <p>Data voucher tidak tersedia. Silahkan Klik Login Di Kanan Atas</p>
    </div>
</template>




