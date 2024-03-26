<script setup>
const props = defineProps({
    name: String,
    description: String,
    tags: Array
})
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-xl font-extrabold">{{ props.name }}</h1>
        <p>{{ props.description }}</p>
        <nav class="flex gap-x-2">
            <Badge v-bind:key="tag" v-for="(tag) in props.tags">{{ tag }} </Badge>
        </nav>
    </div>
</template>