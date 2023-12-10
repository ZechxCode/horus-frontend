<script setup>

defineProps({
    toggle: Object

});


</script>

<template>
    <form>
        <div class="py-4">
            <span class="mb-2 text-md">Email</span>
            <input type="text"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email" id="email" />
        </div>
        <div class="py-4">
            <span class="mb-2 text-md">Password</span>
            <input type="password" name="pass" id="pass"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
        </div>
        <div class="flex justify-between w-full py-4">
            <div class="mr-24">
                <input type="checkbox" name="ch" id="ch" class="mr-2" />
                <span class="text-md">Remember for 30 days</span>
            </div>
            <span class="font-bold text-md">Forgot password</span>
        </div>
        <button
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
            <a href="#" class="font-bold text-black" @click="toggle">Sign up for free</a>
        </div>
    </form>
</template>