<script setup>
defineProps({
    name: String,
    description: String,
    tags: Array,
    urls: Object,
    responsabilities: String,
    is_copyright: Boolean,
    is_trademark: Boolean,
    is_registered: Boolean
})
</script>

<template>
    <article class="flex justify-left items-center gap-6 space-y-7 text-pretty bg-teal-700 w-full p-9">
        <div class="flex flex-col text-left space-y-8 gap-6 w-full">
            <div class="space-y-3 md:space-y-4">
                <h1 class="flex text-xl font-extrabold">
                    {{ name }}
                    <Icon v-if="is_copyright" class="size-3 align-top pt-0.1" name="icon-park-outline:copyright" />
                    <Icon v-if="is_trademark" class="size-3.5 align-top" name="ph:trademark" />
                    <Icon v-if="is_registered" class="size-3-5 align-top" name="ph:trademark-registered" />
                </h1>
                <p class="text-xs md:text-sm leading-tight text-teal-100">{{ description }}</p>
                <p class="text-sm md:text-base md:leading-tight"> {{ responsabilities }}</p>
                <div class="flex justify-between">
                    <nav class="flex gap-x-2">
                        <badge-container>
                            <Badge v-bind:key="tag" v-for="(tag) in tags">{{ tag }} </Badge>
                        </badge-container>
                    </nav>
                    <social class="text-2xl lg:text-3xl items-end" :github="urls.github" :linkedin="urls.linkedin"
                        :web="urls.web" />
                </div>

            </div>
        </div>
    </article>
</template>