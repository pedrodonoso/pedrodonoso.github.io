<template>
  <NuxtLayout>
    <h1>Bienvenid@ a mi blog</h1>
    <p>Aquí puedes encontrar un sinfín de temas de mi interés.</p>
    <div class="grid gap-4">
      <ContentList path="/blog" v-slot="{ list }">
        <div class="bg-teal-300" v-for="article in list" :key="article._path">
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
