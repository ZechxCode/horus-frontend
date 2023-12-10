<script setup>

import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from "../../stores/user";

const userStore = useUserStore()
const router = useRouter()

const form = ref({
    username: "",
    password: "",
    name: "",
    email: "",
});

async function register() {
    try {
        console.log('Registering...');
        const response = await axios.post('http://127.0.0.1:8000/api/register', {

            username: form.value.username,
            password: form.value.password,
            name: form.value.name,
            email: form.value.email,

        })
        console.log('Registration successful:', response.data);
        localStorage.setItem('access_token', response.data.data.access_token)
        localStorage.setItem('token_type', response.data.data.token_type)

        userStore.fetchUser()
        router.push('/')
    } catch (error) {
        console.error(error)
    }
}



</script>

<template>
    <div class="rounded-r-2xl w-[440px] h-full p-6 bg-white rounded bottom-10 right-6 drop-shadow-lg md:block">
        <form @submit.prevent="register" class="px-3">
            <div class="py-4">
                <span class="mb-2 text-md">Username</span>
                <input v-model="form.username" type="text"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="username" id="username" />
            </div>
            <div class="py-4">
                <span class="mb-2 text-md">Password</span>
                <input v-model="form.password" type="password" name="password" id="pass"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div class="py-4">
                <span class="mb-2 text-md">Nama</span>
                <input v-model="form.name" type="text" name="name" id="name"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div class="py-4">
                <span class="mb-2 text-md">Email</span>
                <input v-model="form.email" type="text"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="email" id="email" />
            </div>
            <div class="py-4">
                <button type="submit"
                    class="w-full p-2 mb-6 text-white bg-black rounded-lg hover:bg-gray-200 hover:text-black hover:border hover:border-gray-300">
                    Register
                </button>

                <!-- <button @click="login" type="button"
                                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow">
                                    Sign In
                                </button> -->
            </div>
        </form>
    </div>
</template>