<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <article class="text-left p-6 md:p-12">
        <Breadcrumb :path="doc._path" class="pb-3" />
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
