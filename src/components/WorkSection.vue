<script setup>
import { computed, ref } from 'vue'
import { projects, projectFilters } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'
const activeFilter = ref(projectFilters[0])
const visibleProjects = computed(() =>
  activeFilter.value === projectFilters[0]
    ? projects
    : projects.filter((project) => project.category === activeFilter.value),
)
</script>

<template>
  <section id="work" class="work section-pad">
    <div class="container">
      <div class="section-heading-row">
        <div>
          <div class="section-kicker"><span class="kicker-index">01 /</span> SELECTED WORK</div>
          <h2>Ideas, brought to life<span class="accent-dot">.</span></h2>
        </div>
        <p>A few things I’ve built.<br />Real projects, ready to explore.</p>
      </div>
      <div class="work-toolbar">
        <div class="filters" role="group" aria-label="Filter projects">
          <button
            v-for="filter in projectFilters"
            :key="filter"
            type="button"
            :class="['filter-button', { active: activeFilter === filter }]"
            :aria-pressed="activeFilter === filter"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
        <span class="project-count" role="status"
          >{{ String(visibleProjects.length).padStart(2, '0') }} projects</span
        >
      </div>
      <div class="project-list">
        <ProjectCard v-for="project in visibleProjects" :key="project.number" :project="project" />
      </div>
      <a
        class="all-work-link"
        href="https://github.com/bunyim-kong"
        target="_blank"
        rel="noopener noreferrer"
        >There’s more on my GitHub <span aria-hidden="true">↗</span></a
      >
    </div>
  </section>
</template>
