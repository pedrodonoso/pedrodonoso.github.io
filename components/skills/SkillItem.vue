<script setup>
defineProps({
    title: String
})
</script>
<template>
    <div class="w-fit py-2 px-6 font-semibold text-sm md:text-md text-teal-50 bg-teal-900 text-center hover:-translate-y-1 duration-200 cursor-default">{{ title }}</div>
</template>