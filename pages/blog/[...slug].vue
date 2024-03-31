<script setup lang="ts">
const { page, toc } = useContent();
</script>
<template>
  <NuxtLayout name="blog">
    <template
      #aside
      v-if="toc && toc.links.length !== 0"
      :class="page ? 'block' : 'hidden'"
    >
      <PageToc />
    </template>
    <template #default>
      <Breadcrumb :path="page._path" class="pb-3" v-if="page" />
      <ContentRenderer :value="page">
        <template #not-found>
          <NotFound />
        </template>
        <template #empty>
          <NotFound />
        </template> </ContentRenderer
    ></template>
  </NuxtLayout>
</template>
