<script setup>
import { skillGroups } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="skills section-pad">
    <div class="container">
      <div class="section-heading-row skills-heading">
        <div>
          <div class="section-kicker"><span class="kicker-index">04 /</span> THE TOOLKIT</div>
          <h2>A toolkit for good ideas<span class="accent-dot">.</span></h2>
        </div>
        <p>Tools I use to move an idea from sketch to working product.</p>
      </div>
      <div class="skill-grid">
        <article v-for="group in skillGroups" :key="group.number" class="skill-card">
          <div class="skill-card-head">
            <span>{{ group.number }}</span
            ><span aria-hidden="true">↗</span>
          </div>
          <h3>{{ group.title }}</h3>
          <p class="skill-subtitle">{{ group.subtitle }}</p>
          <div class="skill-pills">
            <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
