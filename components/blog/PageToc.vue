<script setup lang="ts">
const { toc } = useContent();
</script>
<template>
  <div class="top-[80px] sticky z-10">
    <section class="text-left py-6 md:py-12 md:px-8 space-y-6">
      <h2 class="flex text-lg text-orange-200 font-bold">
        Tabla de Contenidos
      </h2>
      <ul v-if="toc && toc.links">
        <li v-for="link in toc.links" :key="link.text">
          <Ref
            :href="`#${link.id}`"
            :name="`${link.text}`"
            class="line-clamp-1 text-orange-100 hover:text-orange-50 after:bg-orange-50 text-ellipsis overflow-hidden"
          />
          <ul v-if="toc && link.children">
            <li
              v-for="sublink in link.children"
              :key="sublink.text"
              class="ps-2"
            >
              <Ref
                :href="`#${sublink.id}`"
                :name="`${sublink.text}`"
                class="line-clamp-1 text-orange-100 hover:text-orange-50 after:bg-orange-50 text-ellipsis overflow-hidden"
              />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
