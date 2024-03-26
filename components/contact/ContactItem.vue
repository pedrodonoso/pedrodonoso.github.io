<script setup>
defineProps({
    href: String,
    icon: String
})
</script>
<template>
    <a class="flex flex-row items-center gap-2 bg-teal-900 p-3 space-x-2 hover:-translate-y-1 duration-100" :href="href"  target=”_blank”>
        <div class="size-9 text-center">
            <Icon class="text-red-100 size-8" :name="icon" />
        </div>
        <div v-if="$slots.default" class="text-l">
            <slot />
        </div>
    </a>
</template>