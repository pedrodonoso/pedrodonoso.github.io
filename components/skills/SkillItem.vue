<script setup>
defineProps({
    title: String
})
</script>
<template>
    <div class="w-fit py-2 px-6 text-l bg-teal-900 text-center hover:-translate-y-1 duration-100">{{ title }}</div>
</template>