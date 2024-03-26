<script>

export default {
    data() {
        return {
            showDrop: false,
            name: 'Pedro Donoso',
            routes: [
                { name: 'Proyectos', ref: '#projects' },
                { name: 'Habilidades', ref: '#skills' },
                { name: 'Contacto', ref: '#contact' }]
        }
    }
}
</script>
<script setup>
import IconOasis from '~/assets/icons/logo.svg'</script>
<template>
    <div class="shadow-xl py-6 px-8">
        <nav class="flex overflow-x-auto font-semibold space-x-8 justify-between md:justify-start items-center">

            <IconOasis class="size-8 text-teal-200" :fontControlled="false" alt="oasis icon" />
            <a class="font-extrabold text-teal-400 hover:text-teal-200 visited:text-teal-600" href="#about">{{
                name }}
            </a>
            <Ref :href="route.ref" class="hidden md:block hover:text-teal-200 visited:text-teal-600"
                v-bind:key="route.name" v-for="(route) in routes">{{ route.name }}</Ref>
            <!-- md dropdown -->
            <button v-on:click="showDrop = !showDrop" class="md:hidden">
                <Icon class="text-red-100" size="1.5rem" name="material-symbols-light:menu-rounded" />
            </button>
        </nav>
        <div class="flex flex-col pt-4 text-center">
            <div :class="showDrop ? 'display' : 'hidden'" class="md:hidden space-y-1">
                <div v-bind:key="route.name" v-for="(route) in routes"
                    class="hover:text-teal-200 visited:text-teal-600">
                    <Ref v-on:click="showDrop = !showDrop" class="hover:text-teal-200 visited:text-teal-600"
                    :href="route.ref">{{ route.name }}</Ref>
                </div>
            </div>
        </div>
    </div>
</template>
