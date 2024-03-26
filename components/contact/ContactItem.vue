<script setup>
defineProps({
    href: String,
    icon: String
})
</script>
<template>
    <a :class="$slots.default ? 'py-3 ps-3 pe-4' : 'p-3'"
        class="flex flex-row items-center gap-2 rounded-full bg-teal-900 hover:-translate-y-1 duration-200"
        :href="href" target=”_blank”>
        <div class="size-9 text-center items-center justify-center align-middle ">
            <Icon class="text-teal-100 size-8" :name="icon" />
        </div>
        <div v-if="$slots.default" class="text-l hidden md:block">
            <slot />
        </div>
    </a>
</template>