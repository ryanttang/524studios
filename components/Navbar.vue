<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border-b border-white/20">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/logo.png" 
              alt="FiveTwentyFour Studios" 
              class="h-8 md:h-10 filter brightness-0 invert"
              loading="eager"
            />
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#home" class="nav-link font-body">Home</a>
            <a href="#services" class="nav-link font-body">Services</a>
            <a href="#portfolio" class="nav-link font-body">Portfolio</a>
            <a href="#about" class="nav-link font-body">About</a>
            <a href="#contact" class="nav-link font-body">Contact</a>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="#contact" class="btn-animated font-body">
            Get Started
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-gray-900/90 to-gray-800/90 backdrop-blur-md border-t border-white/20">
          <a href="#home" class="mobile-nav-link font-body">Home</a>
          <a href="#services" class="mobile-nav-link font-body">Services</a>
          <a href="#portfolio" class="mobile-nav-link font-body">Portfolio</a>
          <a href="#about" class="mobile-nav-link font-body">About</a>
          <a href="#contact" class="mobile-nav-link font-body">Contact</a>
          <a href="#contact" class="btn-animated w-full text-center mt-4 font-body">
            Get Started
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// Logo will be referenced directly in template

const mobileMenuOpen = ref(false)

onMounted(() => {
  if (process.client) {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
        mobileMenuOpen.value = false
      })
    })
  }
})
</script>

<style scoped>
.nav-link {
  @apply text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200;
}

.mobile-nav-link {
  @apply text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium transition-colors duration-200;
}
</style>
