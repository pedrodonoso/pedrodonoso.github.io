<template>
    <NuxtLayout>
        <div class="flex flex-col justify-center items-center">
            <div class="text-left w-1/2 py-12">
                <ContentDoc v-slot="{ doc }">
                    <article>
                        <Breadcrumb :path="doc._path" />
                        <ContentRenderer :value="doc" />
                    </article>
                </ContentDoc>
            </div>
        </div>
    </NuxtLayout>
</template>