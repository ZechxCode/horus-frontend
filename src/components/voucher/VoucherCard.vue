<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const { id, nama, foto, kategori, getVoc } = defineProps(['id', 'nama', 'foto', 'kategori', 'getVoc']);

// defineProps({
//     id: Number,
//     nama: String,
//     foto: String,
//     kategori: String,
// });

// onMounted(() => {
//     console.log('update', id);
// });

const status = ref('unclaimed'); // Assuming the initial status is unclaimed

const isLoading = ref(false);

async function claimVoucher() {
    try {
        isLoading.value = true;
        const response = await axios.put(`http://127.0.0.1:8000/api/voucher/${id}`, {
            status: 'claimed'
        });
        router.push('/history')
        if (response.status === 200) {
            status.value = 'claimed';
        } else {
            console.error(`Failed to claim the voucher. Server returned status ${response.status}`);
        }
    } catch (error) {
        console.error('Failed to claim the voucher:', error.message);
    } finally {
        isLoading.value = false;
    }
};




</script>


<template>
    <div class="max-w-xs mx-auto">
        <div class="overflow-hidden bg-white rounded-lg shadow-lg">
            <div class="flex flex-col items-center p-5">

                <img src="https://via.placeholder.com/150" alt="Dummy" class="mb-4 h-36 w-80">

                <p class="mb-4 text-base text-center text-gray-600">
                    {{ nama }}
                </p>
                <div class="flex items-center justify-between w-full px-6 py-4 mt-auto">
                    <span class="text-sm font-light text-gray-600">#{{ kategori }}</span>
                    <a href="/history" @click.prevent="claimVoucher"
                        class="px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                        Claim
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>