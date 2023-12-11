<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';

import Header from '../layout/Header.vue';
import Nav from '../layout/Nav.vue';








const userStore = useUserStore()
const getUser = computed(() => userStore.getUser)
const isLoggedin = computed(() => userStore.isLoggedIn)

onMounted(() => {
    userStore.fetchUser()
})

</script>

<template>
    <Header :user="getUser" :iSLoggedin="isLoggedin" />

    <aside
        class="flex flex-col float-left w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


        <div class="flex flex-col justify-between flex-1 mt-6">
            <Nav :iSLoggedin="isLoggedin" :userStore="userStore" />
        </div>
    </aside>
</template>