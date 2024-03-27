<script setup>
const props = defineProps({
    title: String,
    icon: String,
    id: String
})
</script>
<template>
    <section :id="id" class="text-left space-y-12">
        <h2 class="text-3xl font-extrabold text-teal-100">
            <Icon size="2.2rem" :name=icon /> {{ title }}
        </h2>
        <slot />
    </section>
</template>