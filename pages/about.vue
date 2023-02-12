<template>
    <div>
        <h2>About</h2>
        <p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eaque aliquam quasi voluptatum dolor corporis necessitatibus? Necessitatibus rem labore asperiores et ex quaerat voluptatibus fugiat neque delectus exercitationem, eius adipisci.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>