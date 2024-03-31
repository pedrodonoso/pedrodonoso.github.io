<template>
  <NuxtLayout>
    <div>
      <custom-header
        title="Bienvenid@!"
        subtitle="Aquí puedes encontrar un sinfín de temas de mi interés."
      ></custom-header>
    </div>

    <div class="grid gap-4 py-12">
      <ContentList path="/blog" v-slot="{ list }">
        <div class="" v-for="article in list" :key="article._path">
          <page-container
            :key="article._path"
            v-bind="article"
            :url="article._path"
            v-if="article?._dir"
          />
        </div>
      </ContentList>
    </div>
  </NuxtLayout>
</template>
