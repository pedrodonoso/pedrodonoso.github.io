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
        <section id="projects">
          <h2 class="text-3xl font-extrabold">Proyectos</h2>
          <div class="flex justify-center p-4 ">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 w-10/12">
              <ProjectCard title="Project 1"
                description="Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam" />
              <ProjectCard title="Project 2"
                description="Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam" />
            </div>
          </div>
        </section>
      </div>

      <section id="skills"></section>
      <section id="contact">
      </section>
    </div>
  </div>
</template>
