<script>

import { useWindowFocus } from '@vueuse/core'
const focused = useWindowFocus();
export default {
    data() {
        return {
            showDrop: false,
            name: 'Pedro Donoso',
            routes: [
                { name: 'Proyectos', href: '#projects' },
                { name: 'Habilidades', href: '#skills' },
                { name: 'Contacto', href: '#contact' }],
            focused: focused.value
        }
    }
}
</script>
<script setup>
import IconOasis from '~/assets/icons/logo.svg'
</script>

<template>
    <nav class="sticky top-0 start-0 shadow-xl py-6 px-8 bg-[#2a3141bd] z-10 animate__animated animate__fadeIn animate__delay-4s">
        <div :class="showDrop ? 'mb-4' : ''" class="flex overflow-x-auto  space-x-8 justify-between sm:justify-start items-center">

            <IconOasis class="size-8 text-teal-200" :fontControlled="false" alt="oasis icon" />
            <!--
            <a :class="focused ? 'after:w-full after:duration-1000' : 'after:w-0 after:duration-0'"
                class="font-bold relative text-teal-200 after:bg-teal-500 after:absolute after:h-0.5 after:bottom-0 after:left-0  after:transition-all  cursor-pointer"
                href="#about">{{
                name }}
            </a>
            -->
            <div class="hidden sm:block flex-row space-x-6">
                <Ref v-bind:key="route.name" v-for="(route) in routes" v-bind="route" />
            </div>

            <!-- md dropdown -->
            <button v-on:click="showDrop = !showDrop" class="sm:hidden ">
                <Icon class="text-teal-400" size="1.8rem" name="material-symbols-light:menu-rounded" />
            </button>
        </div>
            <div class="flex flex-col pt-4 text-center" v-if="showDrop">
                <div class="sm:hidden space-y-1">
                    <div v-bind:key="route.name" v-for="(route) in routes"
                        class="text-teal-300 hover:text-teal-200 visited:text-teal-600">
                        <Ref v-on:click="showDrop = !showDrop" v-bind="route" />
                    </div>
                </div>
            </div>
    </nav>
</template>