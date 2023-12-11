<script setup>

const props = defineProps({
    user: Object,
    iSLoggedin: Boolean,
})

</script>
<template>
    <header>
        <div class="flex items-center justify-between p-4 bg-gray-800">
            <div class="flex items-center">
                <span class="mr-2 text-gray-500 material-icons">Hallo</span>
                <span class="font-semibold text-white">{{ user.name }}</span>
            </div>
            <div class="flex items-center">
                <span v-if="iSLoggedin" class="font-semibold text-white">Sudah Login</span>
                <a href="/login" class="font-semibold text-white" v-else>Login</a>
            </div>
            <RouterLink v-if="iSLoggedin" to="/history"
                class="px-4 py-2 ml-4 font-bold text-gray-700 bg-gray-300 rounded hover:bg-gray-400">
                history
            </RouterLink>
        </div>
    </header>
</template>