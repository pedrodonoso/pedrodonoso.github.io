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
                <h1 class="text-xl font-extrabold">{{ name }}
                </h1>
                <p class="text-sm">{{ description }}</p>
                <div class="flex justify-between">
                    <nav class="flex gap-x-2">
                        <badge-container>
                            <Badge v-bind:key="tag" v-for="(tag) in tags">{{ tag }} </Badge>
                        </badge-container>
                    </nav>
                    <social class="text-2xl lg:text-3xl" :github="urls.github" :linkedin="urls.linkedin"
                        :web="urls.web" />
                </div>

            </div>
        </div>
    </div>
</template>