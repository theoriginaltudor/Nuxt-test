<template>
    <div class="card text-center align-bottom">
        <img :src="product.image" alt="product thumb" class="thumb max-h-40 mx-auto">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">
                View details
            </p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>

</style>