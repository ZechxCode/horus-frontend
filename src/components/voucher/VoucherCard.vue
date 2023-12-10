<script setup>


defineProps({
    id: Number,
    nama: String,
    foto: String,
    kategori: String,
});

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
                    <button class="px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                        Claim
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>