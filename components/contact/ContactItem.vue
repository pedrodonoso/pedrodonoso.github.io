<script setup>
defineProps({
    href: String,
    icon: String
})
</script>
<template>
    <a class="flex flex-row items-center gap-2 p-3 text-sm rounded-xl bg-teal-900 hover:-translate-y-1 duration-200md:rounded-md lg:min-h-16"
        :href="href" target=”_blank”>
        <div class="text-center items-center justify-center align-middle">
            <Icon :name="icon" class="text-teal-100 size-7 md:size-9" />
        </div>
        <div v-if="$slots.default" class="text-l hidden lg:block px-2">
            <slot />
        </div>
    </a>
</template>