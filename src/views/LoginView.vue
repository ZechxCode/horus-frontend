<script setup>
import LoginForm from '../components/authentication/LoginForm.vue'
import RegisterForm from '../components/authentication/RegisterForm.vue'

import { ref } from 'vue';

const isMenuHidden = ref(false);
const isMenuHidden2 = ref(true);

function toggleRegister() {
    isMenuHidden.value = !isMenuHidden.value;
    isMenuHidden2.value = !isMenuHidden2.value;
}


</script>

<template>
    <main>
        <div class="relative overflow-hidden bg-white">
            <div class="flex items-center justify-center min-h-screen pt-20 bg-gray-100 md:pt-10 ">
                <div class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <!-- left side -->
                    <div class="flex flex-col justify-center p-8 md:p-14">
                        <span class="mb-3 text-4xl font-bold">Login Horus</span>
                        <span class="mb-8 font-light text-gray-400">
                            Hi ! Please enter your details
                        </span>
                        <LoginForm :toggle="toggleRegister" />
                    </div>
                    <!-- {/* right side */} -->
                    <!-- <Transition name="slide-fade"> -->
                    <div class="relative" v-if="isMenuHidden">
                        <RegisterForm />
                    </div>
                    <!-- </Transition> -->
                    <!-- <Transition> -->
                    <div class="relative" v-if="isMenuHidden2">
                        <hr class="drop-shadow-sm">
                        <div
                            class="rounded-r-2xl w-[440px] h-full pl-10 p-6 bg-white rounded bottom-10 right-6 md:drop-shadow-lg md:block">
                            <p class="text-xl text-center underline">Ujian Masuk Horus</p><br><br>
                            <span class="text-xl font-bold text-gray-500">Muhammad | Fullstack Web
                                Developer
                            </span>
                            <br>
                            <br>
                            <span class="text-xl text-gray-500">
                                Website ini Terbagi Menjadi 2 yaitu :
                                <br>
                                <br>
                                <li>VueJs Sebagai Frontend</li>
                                <li>Laravel Sebagai Backend</li>

                                <br>Menggunakan TailwindCss sebagai Styling Framework
                            </span>
                        </div>
                    </div>
                    <!-- </Transition> -->
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


/* Slide + Fade */

.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>