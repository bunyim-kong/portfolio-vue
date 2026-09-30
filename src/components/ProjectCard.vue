<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="project-card">
    <div :class="['project-visual', `project-${project.visual}`]">
      <div v-if="project.visual === 'samai'" class="samai-preview">
        <img
          src="/images/samai-map.png"
          alt="Screenshot of the Samai Rum Map interface"
          loading="lazy"
        />
      </div>
      <div
        v-else-if="project.visual === 'nexora'"
        class="nexora-preview"
        aria-label="Stylized preview of a technology storefront"
      >
        <div class="mock-top">
          <b>NEXORA<span>®</span></b
          ><span>Products &nbsp;&nbsp; Collections &nbsp;&nbsp; About</span><span>☰</span>
        </div>
        <div class="mock-copy">
          <small>THE FUTURE, IN FOCUS</small><strong>Technology,<br /><em>considered.</em></strong
          ><span>EXPLORE THE COLLECTION ↗</span>
        </div>
        <div class="mock-product">
          <div class="product-orb"></div>
          <div class="product-base"></div>
        </div>
      </div>
      <div
        v-else
        class="locker-preview"
        aria-label="Stylized preview of a locker management dashboard"
      >
        <div class="locker-sidebar">
          <div class="locker-brand">◈ <span>lockr.</span></div>
          <span>Overview</span><span>Locations</span><span>Lockers</span><span>Usage</span>
        </div>
        <div class="locker-dash">
          <div class="dash-top"><small>OVERVIEW</small><span>◯ &nbsp; Admin</span></div>
          <h3>Good morning, Bunyim.</h3>
          <p>Here’s what’s happening with your lockers.</p>
          <div class="dash-stats">
            <div><small>TOTAL LOCKERS</small><b>128</b><span>Across all locations</span></div>
            <div><small>AVAILABLE</small><b>96</b><span>Ready to use</span></div>
            <div><small>IN USE</small><b>32</b><span>Currently active</span></div>
          </div>
          <div class="dash-chart">
            <span></span><span></span><span></span><span></span><span></span><span></span
            ><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
      <span v-if="project.visual !== 'samai'" class="mockup-label">Visual mockup</span>
    </div>
    <div class="project-info">
      <div class="project-topline">
        <span>PROJECT {{ project.number }}</span
        ><span>{{ project.category }}</span>
      </div>
      <div>
        <p class="project-type">{{ project.type }}</p>
        <h3>{{ project.name }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
      <div class="project-footer">
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
        <span class="project-arrow" aria-hidden="true">↗</span>
      </div>
    </div>
  </article>
</template>
