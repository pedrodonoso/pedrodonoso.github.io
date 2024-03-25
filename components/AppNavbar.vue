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
<template>
    <div class="shadow-xl py-6 px-8">
        <nav class="flex overflow-x-auto font-semibold space-x-8 justify-between md:justify-start">
            <li class="font-extrabold text-teal-400 hover:text-teal-800 visited:text-teal-600">
                <a href="#about">{{ name }}</a>
            </li>
            <li v-bind:key="route.name" v-for="(route) in routes"
                class="hidden md:block hover:text-teal-800 visited:text-teal-600">
                <a :href="route.ref">{{ route.name }}</a>
            </li>
            <!-- md dropdown -->
            <button v-on:click="showDrop = !showDrop" class="md:hidden">
                <Icon class="text-red-100" size="1.5rem" name="material-symbols-light:menu-rounded" />
            </button>
        </nav>
        <div class="flex pt-4 text-left">
            <div :class="showDrop ? 'display' : 'hidden'" class="md:hidden space-y-1">
                <div v-bind:key="route.name" v-for="(route) in routes"
                    class="hover:text-teal-800 visited:text-teal-600">
                    <a :href="route.ref" v-on:click="showDrop = !showDrop">{{ route.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
