<script>
const projects = [
  {
    name: "Project 1",
    description: "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    tags: ["tag1", "tag2", "tag3"]
  }, {
    name: "Project 2",
    description: "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    tags: ["tag1", "tag2", "tag3sda", "sdsad"]
  }
];
export default {
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full max-w-3xl md:max-w-2xl md:w-4/6 p-3 md:p-6">
      <Header>
        <h1 class="text-3xl font-extrabold">Hey! Hola, soy <span class="text-teal-400">Pedro.</span>👋</h1>
        <em class="font-semibold">Soy <span class="text-teal-400">Ingeniero de Software</span> y <span
            class="text-teal-400">Patinador esporádico</span>.</em>
        <div class="text-left">
          <p>Más abajo puedes leer sobre los proyectos dónde he aportado mi granito de arena.</p>
        </div>
        <p class="flex text-xs justify-left">
          <span>En continuo aprendizaje</span>
          <span class="animate-[bounce_1s_infinite]">.</span>
          <span class="animate-[bounce_1500ms_infinite]">.</span>
          <span class="animate-[bounce_2s_infinite]">.</span>
        </p>
      </Header>
      <section id="about">
        <!-- imagen -->
        <!-- presentacion -->
      </section>
      <div>

        <section id="projects" class="text-left space-y-12">

          <h2 class="text-3xl font-extrabold">
            <Icon size="2.2rem" name="ph:terminal-bold" /> Proyectos
          </h2>

          <div class="flex flex-col text-left space-y-8">
            <ProjectItem v-bind:key="project.name" v-for="(project) in projects" :name="project.name"
              :description="project.description" :tags="project.tags" />
          </div>
        </section>
      </div>

      <section id="skills"></section>
      <section id="contact">
      </section>
    </div>
  </div>
</template>
