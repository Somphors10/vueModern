<template>
    <header class="flex justify-between bg-white shadow-md h-[80px] px-5 lg:px-2">
        <div class="text-3xl font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
            <router-link to="/" > <i class="bi bi-code"></i> Somphors </router-link>
        </div>
        <nav>
            <router-link to="/" class="text-slate-500 hover:text-slate-700 text-xl font-medium">Home</router-link>
            <router-link to="/about" class="text-slate-500 hover:text-slate-700 text-xl font-medium">About</router-link>
            <router-link to="/services" class="text-slate-500 hover:text-slate-700 text-xl font-medium">Services</router-link>

        </nav>
    </header>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

<style  scoped>

</style>