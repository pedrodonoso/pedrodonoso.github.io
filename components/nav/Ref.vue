<script setup>
defineProps({
    href: String,
    name: String
})
</script>
<template>
    <a :href="href" :class="$attrs.class"
        class="w-fit text-teal-200 hover:text-teal-100 font-bold relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
        {{ name }}
    </a>
</template>