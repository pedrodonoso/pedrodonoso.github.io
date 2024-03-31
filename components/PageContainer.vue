<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  tags: Array,
  url: String,
});
</script>

<template>
  <a class="" :href="url">
    <article
      class="flex justify-left items-center gap-6 space-y-7 text-pretty bg-teal-700 w-full p-9 hover:-translate-y-1 duration-200"
    >
      <div class="flex flex-col text-left space-y-8 gap-6 w-full">
        <div class="space-y-3 md:space-y-4">
          <h1 class="flex text-xl font-extrabold">
            {{ title }}
          </h1>
          <p class="text-xs md:text-sm leading-tight text-teal-100">
            {{ subtitle }}
          </p>
          <p class="text-sm md:text-base md:leading-tight">{{ description }}</p>
          <div class="flex justify-between">
            <nav class="flex gap-x-2">
              <badge-container>
                <Badge v-bind:key="tag" v-for="tag in tags">{{ tag }} </Badge>
              </badge-container>
            </nav>
          </div>
        </div>
      </div>
    </article>
  </a>
</template>
