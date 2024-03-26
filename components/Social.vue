<script setup>
defineProps({
    github: String,
    linkedin: String,
    web: String,
})
</script>
<template>
    <div class="text-xl  space-x-2">
        <a :href="github" target=”_blank” v-if="github" >
            <Icon class="text-teal-100 hover:-translate-y-1 duration-200" name="uil:github"/>
        </a>
        <a :href="linkedin" target=”_blank” v-if="linkedin">
            <Icon class="text-teal-100 hover:-translate-y-1 duration-200" name="uil:linkedin" />
        </a>
        <a :href="web" target=”_blank” v-if="web">
            <Icon class="text-teal-100 hover:-translate-y-1 duration-200" name="tabler:world-www" />
        </a>
    </div>
</template>