<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/products" class="font-bold">Home Logo Merch</NuxtLink>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot></slot>
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            <li><NuxtLink to="/about" class="btn">About</NuxtLink></li>
        </ul>
    </footer>
</template>

<script setup>
    
</script>