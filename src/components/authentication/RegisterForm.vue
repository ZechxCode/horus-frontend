<script setup>




</script>

<template>
    <div class="rounded-r-2xl w-[440px] h-full p-6 bg-white rounded bottom-10 right-6 drop-shadow-lg md:block">
        <form class="px-3">
            <div class="py-4">
                <span class="mb-2 text-md">Username</span>
                <input type="text"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="username" id="username" />
            </div>
            <div class="py-4">
                <span class="mb-2 text-md">Password</span>
                <input type="password" name="pass" id="pass"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div class="py-4">
                <span class="mb-2 text-md">Nama</span>
                <input type="text" name="nama" id="nama"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div class="py-4">
                <span class="mb-2 text-md">Email</span>
                <input type="text"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="email" id="email" />
            </div>
            <div class="py-4">
                <button
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