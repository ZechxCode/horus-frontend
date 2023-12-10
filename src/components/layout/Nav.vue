<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';

//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')

    const fixedNav = header.offsetTop

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

const isActive = ref(false);
const isMenuHidden = ref(true);

function toggleHamburger() {
    isActive.value = !isActive.value;
    isMenuHidden.value = !isMenuHidden.value;
}
</script>

<template>
    <div class="absolute top-0 left-0 z-10 flex items-center w-full bg-gray-300">
        <div class="container">
            <div class="relative flex items-center justify-between">
                <!-- Logo -->
                <div class="px-4">
                    <div class="group">
                        <a href="#home"
                            class="block py-6 text-lg font-bold transition duration-700 ease-in-out text-dark group-hover:text-primary">Muha<span
                                class="transition duration-700 ease-in-out text-primary group-hover:text-dark">mmad
                                Fatt</span>ah</a>
                    </div>
                </div>
                <!-- Menu -->
                <div class="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" class="absolute block right-4 lg:hidden"
                        :class="{ 'hamburger-active': isActive }" @click="toggleHamburger">
                        <span class="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
                        <span class="transition duration-300 ease-in-out hamburger-line"></span>
                        <span class="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
                    </button>
                    <nav id="nav-menu"
                        class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                        :class="{ 'hidden': isMenuHidden }">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home"
                                    class="flex py-2 mx-8 text-base transition duration-300 ease-in-out text-dark group-hover:text-primary group-hover:scale-105">Be<span
                                        class="transition duration-300 ease-in-out group-hover:text-dark">ran</span>da</a>
                            </li>
                            <li class="group">
                                <RouterLink to="/about"
                                    class="flex py-2 mx-8 text-base transition duration-300 ease-in-out text-dark group-hover:text-primary group-hover:scale-105">
                                    Tenta<span class="transition duration-300 ease-in-out group-hover:text-dark">ng
                                        Sa</span>ya</RouterLink>
                            </li>
                            <li class="group">
                                <RouterLink to="/login"
                                    class="flex py-2 mx-8 text-base transition duration-300 ease-in-out text-dark group-hover:text-primary group-hover:scale-105">
                                    Por<span class="transition duration-300 ease-in-out group-hover:text-dark">tfo</span>lio
                                </RouterLink>
                            </li>
                            <li class="group">
                                <a href="#clients"
                                    class="flex py-2 mx-8 text-base transition duration-300 ease-in-out text-dark group-hover:text-primary group-hover:scale-105">Cl<span
                                        class="transition duration-300 ease-in-out group-hover:text-dark">ien</span>ts</a>
                            </li>
                            <li class="group">
                                <a href="#blog"
                                    class="flex py-2 mx-8 text-base transition duration-300 ease-in-out text-dark group-hover:text-primary group-hover:scale-105">B<span
                                        class="transition duration-300 ease-in-out group-hover:text-dark">lo</span>g</a>
                            </li>
                            <li class="group">
                                <a href="#contact"
                                    class="flex py-2 mx-8 text-base transition duration-300 ease-in-out text-dark group-hover:text-primary group-hover:scale-105">Co<span
                                        class="transition duration-300 ease-in-out group-hover:text-dark">nta</span>ct</a>
                            </li>
                        </ul>
                    </nav>
                    <!-- End Menu -->
                </div>
            </div>
        </div>
    </div>
</template>