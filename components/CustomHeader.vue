<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  id: String,
});
</script>
<template>
  <div class="grid gap-4">
    <h1 :id="id" class="text-left text-3xl font-extrabold text-teal-50">
      {{ title }}
    </h1>
    <h2 class="text-left text-md font-extrabold text-teal-100">
      {{ subtitle }}
    </h2>
  </div>
</template>
