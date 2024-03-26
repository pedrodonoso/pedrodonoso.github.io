<script>
import SkillItem from '~/components/skills/SkillItem.vue';
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
const skills = ["HTML", "CSS", "TailWind", "ReactJS", "NextJS", "Golang", "Docker", "Javas"]
export default {
  components: { SkillItem },
  data() {
    return {
      projects: projects,
      skills: skills
    }
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-3xl md:max-w-2xl md:w-4/6 px-12 md:p-0">
      <Header>
        <h1 class="text-3xl font-extrabold">Hey! Hola, soy <span class="text-teal-400">Pedro</span>.👋</h1>
        <em class="font-semibold">
          Soy
          <span class="text-teal-400">Ingeniero de Software</span>
          y
          <span class="text-teal-400">Patinador esporádico</span>.
        </em>
        <div class="text-center">
          <p>Más abajo puedes leer sobre los proyectos dónde he aportado mi granito de arena.</p>
        </div>
        <span>En continuo aprendizaje &nbsp;</span>
        <p class="flex text-xs justify-center">
          <span class="animate-[bounce_1s_infinite]">.</span>
          <span class="animate-[bounce_1500ms_infinite]">.</span>
          <span class="animate-[bounce_2s_infinite]">.</span>
        </p>
      </Header>
      <div class="space-y-16">
        <section id="about">
          <!-- imagen -->
          <!-- presentacion -->
        </section>
        <SectionContainer title="Proyectos" icon="tabler:folder-code" id="projects">
          <div class="flex flex-col text-left space-y-8">
            <ProjectItem v-bind:key="project.name" v-for="(project) in projects" :name="project.name"
              :description="project.description" :tags="project.tags" />
          </div>
        </SectionContainer>

        <SectionContainer title="Habilidades" icon="tabler:code-plus" id="skills">
          <skill-container>
            <skill-item v-bind:key="skill" v-for="(skill) in skills" :title="skill" />
          </skill-container>
        </SectionContainer>

        <SectionContainer title="Contacto" icon="tabler:message-circle-code" id="contact">
          <contact-container>
            <contact-item href="https://github.com/pedrodonoso" icon="uil:github">
              Mis proyectos
            </contact-item>
            <contact-item href="https://www.linkedin.com/in/pedrodonosoaguilera/" icon="uil:linkedin" />
            <contact-item href="mailto:pedro.donosoa.dev@gmail.com" icon="bi:envelope-arrow-up-fill" />
          </contact-container>
        </SectionContainer>
      </div>
    </div>
  </div>
</template>
