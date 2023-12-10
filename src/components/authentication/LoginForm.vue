<script setup>

import { ref } from "vue";
import { RouterLink, useRouter } from 'vue-router'
import axios from "axios";

import { useUserStore } from "../../stores/user";

const userStore = useUserStore()
const router = useRouter()

const props = defineProps(['toggle']);

const form = ref({
    email: "",
    password: "",
});

async function login() {
    try {
        console.log('Logging in...');
        const response = await axios.post('http://127.0.0.1:8000/api/login', {

            email: form.value.email,
            password: form.value.password,

        })
        console.log('Login successful:', response.data);
        localStorage.setItem('access_token', response.data.data.access_token)
        localStorage.setItem('token_type', response.data.data.token_type)

        userStore.fetchUser()
        router.push('/')
    } catch (error) {
        console.error('Login Failed', error)
    }
}





</script>

<template>
    <form @submit.prevent="login">
        <div class="py-4">
            <span class="mb-2 text-md">Email</span>
            <input v-model="form.email" type="text"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email" id="email" />
        </div>
        <div class="py-4">
            <span class="mb-2 text-md">Password</span>
            <input v-model="form.password" type="password" name="password" id="password"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
        </div>
        <div class="flex justify-between w-full py-4">
            <div class="mr-24">
                <input type="checkbox" name="ch" id="ch" class="mr-2" />
                <span class="text-md">Remember for 30 days</span>
            </div>
            <span class="font-bold text-md">Forgot password</span>
        </div>
        <button type="submit"
            class="w-full p-2 mb-6 text-white bg-black rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
        </button>
        <button class="w-full p-2 mb-6 border border-gray-300 rounded-lg text-md hover:bg-black hover:text-white">
            --
            <img src="../icons/google.svg" alt="img" class="inline w-6 h-6 mr-2" />
            Sign in with Google
            --
        </button>
        <div class="text-center text-gray-400">
            Dont'have an account?
            <a href="#" class="font-bold text-black" @click="props.toggle">Sign up for free</a>
        </div>
    </form>
</template>