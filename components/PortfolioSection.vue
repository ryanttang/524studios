<template>
  <section id="portfolio" class="section-padding bg-gray-900">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          Our <span class="text-primary-400">Portfolio</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto font-body">
          Explore our recent projects and see how we've helped businesses transform 
          their online presence with modern, effective web solutions.
        </p>
      </div>
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-3 rounded-full font-medium transition-all duration-200',
            activeCategory === category 
              ? 'bg-primary-500 text-white' 
              : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-gray-300 hover:from-white/15 hover:to-white/10'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="portfolio-item group"
        >
          <div class="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 hover:from-white/15 hover:to-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-black/30">
            <!-- Project Image -->
            <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20">
              <div class="w-full h-64 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <p class="text-primary-400 font-medium">{{ project.name }}</p>
                </div>
              </div>
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <button class="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200 mr-4">
                  View Project
                </button>
                <button class="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <!-- Project Info -->
          <div class="mt-6">
            <h3 class="text-xl font-semibold text-white mb-2 font-display">{{ project.name }}</h3>
            <p class="text-gray-300 mb-4 font-body">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-gray-300 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="text-center mt-16 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-white mb-4 font-display">
          Like What You See?
        </h3>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto font-body">
          Let's create something amazing together. Get in touch to discuss your project and see how we can help bring your vision to life.
        </p>
        <a href="#contact" class="btn-primary text-lg px-8 py-4">
          Start Your Project
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeCategory = ref('All')

const categories = ['All', 'Web Design', 'E-commerce', 'Branding', 'Development']

const projects = [
  {
    id: 1,
    name: 'Modern Tech Startup',
    description: 'A sleek, modern website for a tech startup with focus on user experience and conversion optimization.',
    category: 'Web Design',
    technologies: ['React', 'Tailwind CSS', 'GSAP']
  },
  {
    id: 2,
    name: 'Fashion E-commerce',
    description: 'Complete e-commerce solution with custom design, payment integration, and inventory management.',
    category: 'E-commerce',
    technologies: ['Vue.js', 'Nuxt', 'Stripe']
  },
  {
    id: 3,
    name: 'Restaurant Branding',
    description: 'Complete brand identity and website design for a high-end restaurant chain.',
    category: 'Branding',
    technologies: ['Branding', 'Web Design', 'Photography']
  },
  {
    id: 4,
    name: 'SaaS Dashboard',
    description: 'Complex dashboard application with real-time data visualization and user management.',
    category: 'Development',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 5,
    name: 'Creative Agency',
    description: 'Portfolio website for a creative agency with interactive animations and modern design.',
    category: 'Web Design',
    technologies: ['GSAP', 'Three.js', 'WebGL']
  },
  {
    id: 6,
    name: 'Online Learning Platform',
    description: 'Educational platform with course management, video streaming, and student progress tracking.',
    category: 'Development',
    technologies: ['Vue.js', 'Firebase', 'Video.js']
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

onMounted(async () => {
  if (process.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate portfolio items on scroll
    gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }
})
</script>

<style scoped>
.portfolio-item {
  @apply transition-all duration-300;
}

.portfolio-item:hover {
  @apply transform -translate-y-2;
}
</style>
