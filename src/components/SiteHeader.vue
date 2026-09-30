<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner container">
      <a class="brand" href="#top" aria-label="Kong Bunyim, back to top" @click="closeMenu">
        <span class="brand-mark">K<span>.</span>YIM</span>
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Selected work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="header-actions">
        <a class="header-cv" href="/Kong-Bunyim-CV.pdf" download
          >Download CV <span aria-hidden="true">↗</span></a
        >
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span>
        </button>
      </div>
    </div>
    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
      <a href="#about" @click="closeMenu">About</a>
      <a href="#work" @click="closeMenu">Selected work</a>
      <a href="#experience" @click="closeMenu">Experience</a>
      <a href="#contact" @click="closeMenu">Contact</a>
    </nav>
  </header>
</template>
