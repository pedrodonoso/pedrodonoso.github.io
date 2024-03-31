<script setup>
const projects = await queryContent("/_portfolio/projects")
  .findOne()
  .then((res) => res.body);
const querySkills = await queryContent("/_portfolio/skills")
  .findOne()
  .then((res) => res.body);
const skills = querySkills.map((item) => item.skill);
defineProps({
  projects: Array,
  skills: Array,
});
</script>

<template>
  <NuxtLayout>
    <header-container />
    <aside class="animate__animated animate__fadeIn animate__delay-2s">
      <section-container
        title="Proyectos"
        icon="tabler:folder-code"
        id="projects"
        class="pt-24"
      >
        <project-item
          v-bind="project"
          v-bind:key="project.name"
          v-for="project in projects"
        />
      </section-container>

      <section-container
        title="Habilidades"
        icon="tabler:code-plus"
        id="skills"
        class="pt-24"
      >
        <skill-container>
          <skill-item
            v-bind:key="skill"
            v-for="skill in skills"
            :title="skill"
          />
        </skill-container>
      </section-container>

      <section-container
        title="Contacto"
        icon="tabler:message-circle-code"
        id="contact"
        class="pt-24 pb-24 md:pb-32"
      >
        <contact-container>
          <contact-item href="https://github.com/pedrodonoso" icon="uil:github">
          </contact-item>
          <contact-item
            href="https://www.linkedin.com/in/pedrodonosoaguilera/"
            icon="uil:linkedin"
          ></contact-item>
          <contact-item
            href="mailto:pedro.donosoa.dev@gmail.com?subject=[ Cotización ]&body=Buen día! Cuentame, qué necesitas? 🧐"
            icon="bi:envelope-arrow-up-fill"
            >Cotiza!</contact-item
          >
        </contact-container>
      </section-container>
    </aside>
  </NuxtLayout>
</template>
