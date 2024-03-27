<script setup>
defineProps({
    href: String,
    icon: String
})
</script>
<template>
    <a class="flex flex-row items-center gap-2 p-3 text-sm rounded-xl bg-teal-900 hover:-translate-y-1 duration-200 md:rounded-md lg:min-h-16"
        :href="href" target=”_blank”>
        <Icon :name="icon" class="text-teal-100 size-7 md:size-9" />
        <div v-if="$slots.default" class="font-semibold text-md text-teal-50 hidden lg:block">
            <slot />
        </div>
    </a>
</template>