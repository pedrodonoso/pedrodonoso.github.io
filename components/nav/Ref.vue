<script setup>
defineProps({
    href: String,
})
</script>
<template>
    <a :href="href" :class="$attrs.class"
        class="font-bold relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
        <slot />
    </a>

</template>