<script setup lang="ts">
defineProps({
    github : String,
    linkedin : String,
    web : String,
    redirect: {
        type: Boolean,
        default: true
    }
})
</script>
<template>
    <div class="flex flex-row ps-2 md:ps-4 space-x-2">
        <a :href="github" :target="redirect ? '_blank' : ''" v-if="github" class="p-0 m-0">
            <Icon class="text-teal-100 hover:-translate-y-1 duration-200" name="uil:github"/>
        </a>
        <a :href="linkedin" :target="redirect ? '_blank' : ''" v-if="linkedin">
            <Icon class="text-teal-100 hover:-translate-y-1 duration-200" name="uil:linkedin" />
        </a>
        <a :href="web" :target="redirect ? '_blank' : ''" v-if="web">
            <Icon class="text-teal-100 hover:-translate-y-1 duration-200" name="tabler:world-www" />
        </a>
    </div>
</template>