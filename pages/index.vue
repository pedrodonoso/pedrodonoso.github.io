<script setup>
const projects = await queryContent('/portfolio/projects').findOne().then((res) => res.body);
const querySkills = await queryContent('/portfolio/skills').findOne().then((res) => res.body);
const skills = querySkills.map((item) => item.skill);
defineProps({
  projects: Array,
  skills: Array
}) 
</script>

<template>
  <main class="flex justify-center">
    <section class="w-screen max-w-3xl md:max-w-2xl md:w-4/6 px-12 md:p-0 space-y-16">
      <Header>
        <h1 class="text-3xl font-extrabold animate__animated animate__fadeIn animate__delay-1s"
          style="animation-duration: 1s;">Hey!
          Hola, soy <span class="text-teal-400">Pedro</span>.👋</h1>
        <div class="font-semibold animate__animated animate__fadeIn animate__delay-2s" style="animation-duration: 2s;">
          Soy
          <span class="text-teal-400 ">Ingeniero de Software</span>
          y
          <span class="text-teal-400">Patinador esporádico</span>.
        </div>
        <div class="text-center animate__animated animate__fadeIn animate__delay-4s" style="animation-duration: 3s;">
          <p>En este lugar puedes leer sobre algunos de los proyectos dónde he aportado mi granito de arena.</p>
        </div>
        <em class="text-xs animate__animated animate__fadeIn animate__delay-4s">En continuo aprendizaje &nbsp;</em>
        <p class="flex text-xs justify-center animate__animated animate__fadeIn animate__delay-4s">
          <span class="animate-[bounce_1s_infinite]">.</span>
          <span class="animate-[bounce_1500ms_infinite]">.</span>
          <span class="animate-[bounce_2s_infinite]">.</span>
        </p>
      </Header>
      <aside class="animate__animated animate__fadeIn animate__delay-4s">
        <SectionContainer title="Proyectos" icon="tabler:folder-code" id="projects" class="pt-24">
          <project-item v-bind="project" v-bind:key="project.name" v-for="(project) in projects" />
        </SectionContainer>

        <SectionContainer title="Habilidades" icon="tabler:code-plus" id="skills" class="pt-24">
          <skill-container>
            <skill-item v-bind:key="skill" v-for="(skill) in skills" :title="skill" />
          </skill-container>
        </SectionContainer>

        <SectionContainer title="Contacto" icon="tabler:message-circle-code" id="contact" class="pt-24 pb-24 md:pb-32">
          <contact-container>
            <contact-item href="https://github.com/pedrodonoso" icon="uil:github">
            </contact-item>
            <contact-item href="https://www.linkedin.com/in/pedrodonosoaguilera/" icon="uil:linkedin"></contact-item>
            <contact-item href="mailto:pedro.donosoa.dev@gmail.com" icon="bi:envelope-arrow-up-fill">Cotiza tu consultoría!</contact-item>
          </contact-container>
        </SectionContainer>
      </aside>
    </section>
  </main>
</template>
