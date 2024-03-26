<script setup>
defineProps({
    name: String,
    description: String,
    tags: Array,
    urls: Object
})
</script>

<template>
    <div class="flex justify-left items-center gap-6 space-y-7">
        <div class="flex flex-col text-left space-y-8 gap-6 w-full">
            <div class="space-y-4">
                <div class="flex justify-between">
                    <h1 class="text-xl font-extrabold">{{ name }}
                    </h1>
                    <social :github="urls.github" :linkedin="urls.linkedin" :web="urls.web" />
                </div>
                <p>{{ description }}</p>
                <nav class="flex gap-x-2">
                    <badge-container>
                        <Badge v-bind:key="tag" v-for="(tag) in tags">{{ tag }} </Badge>
                    </badge-container>
                </nav>
            </div>
        </div>
    </div>
</template>