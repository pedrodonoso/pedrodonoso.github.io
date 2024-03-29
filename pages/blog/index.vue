<template>
  <NuxtLayout>
    <div class="flex flex-col justify-center items-center">
      <div class="text-left w-1/2 py-12 items-center grid gap-4">
        <ContentList path="/blog" v-slot="{ list }" class="space-y-6">
          <h1>Bienvenid@ a mi blog</h1>
          <p>Aquí puedes encontrar un sinfín de temas de mi interés.</p>
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
    </div>
  </NuxtLayout>
</template>
