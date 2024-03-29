<template>
  <NuxtLayout>
      <ContentDoc v-slot="{ doc }">
        <article class="text-left">
          <Breadcrumb :path="doc._path" class="pb-3"/>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
  </NuxtLayout>
</template>
