<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="work-entry">
    <a
      :href="project.url || project.repo"
      target="_blank"
      rel="noopener noreferrer"
      :class="['work-preview', `preview-${project.visual}`]"
      :aria-label="`${project.url ? 'Visit' : 'View source for'} ${project.name} (opens in a new tab)`"
    >
      <img :src="project.image" :alt="project.imageAlt" loading="lazy" width="800" height="500" />
      <span class="preview-caption"
        >{{ project.url ? 'Explore website' : 'Explore project' }}
        <span aria-hidden="true">↗</span></span
      >
    </a>
    <div class="work-details">
      <div class="work-meta">
        <span>{{ project.number }} / {{ project.type }}</span
        ><span v-if="project.url" class="work-live"><i></i>Live</span>
      </div>
      <h3>
        <a :href="project.url || project.repo" target="_blank" rel="noopener noreferrer">{{
          project.name
        }}</a>
      </h3>
      <p class="work-description">{{ project.description }}</p>
      <ul class="work-stack" aria-label="Technologies used">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <div class="work-actions">
        <a
          v-if="project.url"
          class="work-visit"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visit ${project.name} live website`"
          >Visit website <span aria-hidden="true">↗</span></a
        >
        <a
          class="work-source"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`View ${project.name} source on GitHub`"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
          </svg>
          Source code <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </article>
</template>
