<script lang="ts">
export interface BreadcrumbItem {
    label: String
    href: String | undefined
}
</script>

<script setup lang="ts">
defineProps({
    items: Array<BreadcrumbItem>,
    path: {
        type: String,
        required: true
    }
})
function getPaths(_path: String) {
    const regLabels = "/";
    const regHref = /((\/)\w+)/;
    const capitalized = (label: string) => label.charAt(0).toUpperCase() + label.slice(1);
    const listLabel = _path?.split(regLabels).flatMap((label) => (label !== '/' && label !== '' ? [`${capitalized(label)}`] : []));
    const listPath = _path?.split(regHref).flatMap((label) => (label !== '/' && label !== '' ? [`${label}`] : []));
    const listHrefs = listPath?.map((_, index) => listPath.slice(0, index + 1).join(''))
    const listPaths = listLabel?.map((_, index) => {
        return {
            label: listLabel[index],
            href: listHrefs[index]
        }
    });
    return listPaths
}
</script>

<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center" v-bind:key="item.label" v-for="(item, index) in getPaths(path)">
                <svg v-if="index !== 0" class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <a :href="item.href" :class=" index === 0 ? '' : 'pointer-events-none'"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    {{ item.label }}
                </a>
            </li>
        </ol>
    </nav>
</template>