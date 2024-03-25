<script setup>
defineProps({
    title: String,
    description: String
})
</script>
<template>
    <div
        class="rounded bg-slate-800 shadow-md p-3 hover:bg-slate-700 transition ease-linear hover:-translate-y-1 duration-200">
        <div class="flex flex-col space-y-4">
            <!-- <div class="bg-cyan-500 shadow-lg shadow-cyan-500/50"> asdsa</div> -->
            <div class="text-2xl font-extrabold ">{{ title }}</div>
            <div class="text-sm font-thin">{{ description }}
            </div>
            <div class="grid grid-flow-col auto-cols-auto gap-2">
                <Badge>react</Badge>
                <Badge>next</Badge>
                <Badge>vue</Badge>
                <Badge>vue</Badge>
            </div>
        </div>
    </div>
</template>