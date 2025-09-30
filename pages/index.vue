<template>
  <div>
    <!-- Navigation -->
    <Navbar />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Portfolio Section -->
    <PortfolioSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (process.client) {
    // Initialize GSAP animations
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    
    gsap.registerPlugin(ScrollTrigger)
    
    // Set up scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }
})
</script>
