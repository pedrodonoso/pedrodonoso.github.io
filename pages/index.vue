<script setup lang="ts">
const version = 2 + 1
</script>

<template>
  <div>
    <Header>
      <h1 class="text-3xl font-extrabold">Hey! Hola, soy <span class="text-teal-400">Pedro.</span>👋</h1>
      <em class="font-semibold">Soy <span class="text-teal-400">Ingeniero de Software</span> y <span
          class="text-teal-400">Patinador esporádico</span>.</em>
      <div class="text-left">
        <p>Más abajo puedes leer sobre los proyectos dónde he aportado mi granito de arena.</p>
      </div>
      <p class="flex text-xs justify-center">
        <span>En continuo aprendizaje</span>
        <span class="animate-[bounce_1s_infinite]">.</span>
        <span class="animate-[bounce_1500ms_infinite]">.</span>
        <span class="animate-[bounce_2s_infinite]">.</span>
      </p>
    </Header>
    <section id="about">
    </section>
    <section id="projects">
    </section>
    <section id="skills"></section>
    <section id="contact"></section>
  </div>
</template>
