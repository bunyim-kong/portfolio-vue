<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const menuOpen = ref(false)
const theme = ref(document.documentElement.dataset.theme || 'light')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
let explicitTheme = false
try {
  explicitTheme = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme'))
} catch {
  /* Storage can be unavailable. */
}
function applyTheme(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', value === 'dark' ? '#171918' : '#f7f6f2')
}
function toggleTheme() {
  explicitTheme = true
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  try {
    localStorage.setItem('portfolio-theme', theme.value)
  } catch {
    /* Theme still works without storage. */
  }
}
function followSystem(event) {
  if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light')
}
function closeMenu() {
  menuOpen.value = false
}
function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}
onMounted(() => {
  applyTheme(theme.value)
  systemTheme.addEventListener('change', followSystem)
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  systemTheme.removeEventListener('change', followSystem)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="site-header">
    <div class="header-inner container">
      <a class="brand" href="#top" aria-label="Kong Bunyim, back to top" @click="closeMenu"
        ><span class="brand-symbol">K <span>.</span> Y I M</span></a
      >
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a
        ><a href="#contact">Contact</a>
      </nav>
      <div class="header-actions">
        <button
          class="theme-toggle"
          type="button"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          :aria-pressed="theme === 'dark'"
          @click="toggleTheme"
        >
          <svg
            v-if="theme === 'light'"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            aria-hidden="true"
          >
            <path d="M20.8 13.3A9 9 0 0 1 10.7 3.2 9 9 0 1 0 20.8 13.3Z" />
          </svg>
          <svg
            v-else
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
            />
          </svg>
        </button>
        <a class="header-contact" href="mailto:bunyimkong@gmail.com"
          >Let’s talk <span aria-hidden="true">↗</span></a
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
      <a href="#work" @click="closeMenu">Work</a><a href="#about" @click="closeMenu">About</a
      ><a href="#experience" @click="closeMenu">Experience</a
      ><a href="#contact" @click="closeMenu">Contact</a>
    </nav>
  </header>
</template>
