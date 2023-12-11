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

const status = ref(); // Assuming the initial status is unclaimed

const isLoading = ref(false);

async function claimVoucher() {
    try {
        isLoading.value = true;
        const response = await axios.put(`http://127.0.0.1:8000/api/voucher/${id}`, {
            status: 'unclaimed'
        });
        router.push('/')
        if (response.status === 200) {
            status.value = 'unclaimed';
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
    <tr class="bg-white border-b">
        <td class="px-6 py-4">
            <div class="flex items-center">
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <!-- SVG content for icon -->
                    </svg>
                </div>
                {{ nama }}
            </div>
        </td>
        <td class="px-6 py-4">
            <div class="flex items-center">
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <!-- SVG content for icon -->
                    </svg>
                </div>
                {{ kategori }}
            </div>
        </td>
        <td class="flex items-center justify-center px-6 py-4">
            <button @click="claimVoucher"
                class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG content for remove icon -->
                </svg>
                Remove
            </button>
        </td>

    </tr>
</template>