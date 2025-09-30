<template>
  <section id="portfolio" class="section-padding relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg 
        :src="backgroundImageUrl" 
        alt="Portfolio section background showcasing FiveTwentyFour Studios' design work" 
        class="w-full h-full object-cover"
        loading="lazy"
        sizes="100vw"
        quality="80"
        format="webp"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/70"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          The Work We Do for <span class="text-primary-400">You</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto font-body">
          We specialize in supporting your business with custom web solutions that drive growth, 
          enhance user experience, and deliver measurable results.
        </p>
      </div>
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="handleCategoryClick(category)"
          :class="getButtonClasses(category)"
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
              <div class="w-full h-64 relative overflow-hidden">
                <NuxtImg 
                  :src="project.image" 
                  :alt="`${project.name} - ${project.description}`" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                  quality="85"
                  format="webp"
                />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <button 
                  class="btn-animated px-6 py-3 rounded-lg font-medium mr-4"
                  @click="trackButtonClick('View Project', `portfolio-${project.name}`)"
                >
                  View Project
                </button>
                <button 
                  class="btn-animated px-6 py-3 rounded-lg font-medium"
                  @click="trackButtonClick('Learn More', `portfolio-${project.name}`)"
                >
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
        <a 
          href="#contact" 
          class="btn-animated text-lg px-8 py-4"
          @click="trackButtonClick('Start Your Project', 'portfolio-cta')"
        >
          Start Your Project
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import backgroundImageUrl from '~/assets/images/background1.png'

const { trackButtonClick, trackEvent } = useAnalytics()

const activeCategory = ref('All')

const categories = ['All', 'Web Design', 'E-commerce', 'Branding', 'Development']

const projects = [
  {
    id: 1,
    name: 'Modern Tech Startup',
    description: 'A sleek, modern website for a tech startup with focus on user experience and conversion optimization.',
    category: 'Web Design',
    technologies: ['React', 'Tailwind CSS', 'GSAP'],
    image: new URL('../assets/images/work/tech.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: 'Fashion E-commerce',
    description: 'Complete e-commerce solution with custom design, payment integration, and inventory management.',
    category: 'E-commerce',
    technologies: ['Vue.js', 'Nuxt', 'Stripe'],
    image: new URL('../assets/images/work/fashion.jpg', import.meta.url).href
  },
  {
    id: 3,
    name: 'Restaurant Branding',
    description: 'Complete brand identity and website design for a high-end restaurant chain.',
    category: 'Branding',
    technologies: ['Branding', 'Web Design', 'Photography'],
    image: new URL('../assets/images/work/restaurant.jpg', import.meta.url).href
  },
  {
    id: 4,
    name: 'SaaS Dashboard',
    description: 'Complex dashboard application with real-time data visualization and user management.',
    category: 'Development',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: new URL('../assets/images/work/data.jpg', import.meta.url).href
  },
  {
    id: 5,
    name: 'Creative Agency',
    description: 'Portfolio website for a creative agency with interactive animations and modern design.',
    category: 'Web Design',
    technologies: ['GSAP', 'Three.js', 'WebGL'],
    image: new URL('../assets/images/work/creative.jpg', import.meta.url).href
  },
  {
    id: 6,
    name: 'Booking Platform',
    description: 'Comprehensive scheduling platform for service providers with appointment management, client tracking, and automated reminders.',
    category: 'Development',
    technologies: ['Vue.js', 'Firebase', 'Calendar API'],
    image: new URL('../assets/images/work/booking.jpg', import.meta.url).href
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const handleCategoryClick = (category) => {
  activeCategory.value = category
  trackEvent('portfolio_filter', {
    category: category,
    label: `Filter by ${category}`
  })
}

const getButtonClasses = (category) => {
  const base = 'px-6 py-3 rounded-full font-medium transition-all duration-200 border backdrop-blur-md';
  const isActive = activeCategory.value === category;
  if (isActive) {
    switch (category) {
      case 'All':
        return [base, 'bg-gradient-to-br from-primary-500 to-primary-600 text-white border-primary-400/40 shadow-lg shadow-primary-500/25'];
      case 'Web Design':
        return [base, 'bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-indigo-600/30 text-white border-blue-300/40 shadow-lg shadow-blue-500/25'];
      case 'E-commerce':
        return [base, 'bg-gradient-to-br from-rose-500/30 via-pink-500/25 to-orange-600/30 text-white border-rose-300/40 shadow-lg shadow-rose-500/25'];
      case 'Branding':
        return [base, 'bg-gradient-to-br from-violet-500/30 via-purple-500/25 to-fuchsia-600/30 text-white border-violet-300/40 shadow-lg shadow-violet-500/25'];
      case 'Development':
        return [base, 'bg-gradient-to-br from-emerald-500/30 via-teal-500/25 to-cyan-600/30 text-white border-emerald-300/40 shadow-lg shadow-emerald-500/25'];
      default:
        return [base, 'bg-primary-500 text-white border-primary-400/40'];
    }
  }
  // Inactive state (glassmorphic neutral)
  return [base, 'bg-gradient-to-br from-white/10 to-white/5 text-gray-300 border-white/20 hover:from-white/15 hover:to-white/10 hover:border-white/30'];
}

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
