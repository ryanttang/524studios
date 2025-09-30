<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        :src="heroImageUrl" 
        alt="Hero Background" 
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>
    </div>
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute top-40 left-40 w-80 h-80 bg-primary-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    
    <!-- Three.js Background -->
    <div ref="threeContainer" class="absolute inset-0 opacity-20"></div>
    
    <!-- Content -->
    <div class="relative z-10 container-custom text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Logo -->
        <div class="mb-8 animate-on-scroll">
          <img 
            :src="logoUrl" 
            alt="FiveTwentyFour Studios" 
            class="h-28 md:h-36 mx-auto mb-6 filter brightness-0 invert opacity-90"
          />
        </div>
        
        <!-- Main Heading -->
        <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
          <span class="block">Boutique</span>
          <span class="block text-primary-400">Web Design</span>
          <span class="block">That Converts</span>
        </h1>
        
        <!-- Subtitle -->
        <p ref="heroSubtitle" class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
          We create modern, minimal, and stylish websites that help your business grow and succeed online. 
          Let's build something extraordinary together.
        </p>
        
        <!-- CTA Buttons -->
        <div ref="heroButtons" class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#portfolio" class="btn-primary text-lg px-8 py-4">
            View Our Work
          </a>
          <a href="#contact" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-medium py-3 px-6 rounded-lg transition-all duration-200 text-lg px-8 py-4">
            Start Your Project
          </a>
        </div>
        
        <!-- Stats -->
        <div ref="heroStats" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-2">50+</div>
            <div class="text-gray-300">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-2">100%</div>
            <div class="text-gray-300">Client Satisfaction</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-2">5+</div>
            <div class="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div ref="scrollIndicator" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logoUrl from '~/assets/images/logo.png'
import heroImageUrl from '~/assets/images/hero.png'

const threeContainer = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const heroStats = ref(null)
const scrollIndicator = ref(null)

onMounted(async () => {
  if (process.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    const THREE = await import('three')
    
    gsap.registerPlugin(ScrollTrigger)
    
    // Initialize Three.js background
    initThreeBackground(THREE)
    
    // Hero animations
    const tl = gsap.timeline()
    
    tl.fromTo(heroTitle.value.children, 
      { 
        opacity: 0, 
        y: 100,
        rotationX: 90
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      }
    )
    .fromTo(heroSubtitle.value,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(heroButtons.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(heroStats.value.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
      "-=0.2"
    )
    .fromTo(scrollIndicator.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    )
    
    // Parallax effect for background elements
    gsap.to(".animate-blob", {
      y: -100,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true
    })
  }
})

function initThreeBackground(THREE) {
  if (!threeContainer.value) return
  
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  threeContainer.value.appendChild(renderer.domElement)
  
  // Create floating geometric shapes
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ 
    color: 0x0ea5e9, 
    wireframe: true,
    transparent: true,
    opacity: 0.1
  })
  
  const shapes = []
  for (let i = 0; i < 20; i++) {
    const shape = new THREE.Mesh(geometry, material)
    shape.position.x = (Math.random() - 0.5) * 20
    shape.position.y = (Math.random() - 0.5) * 20
    shape.position.z = (Math.random() - 0.5) * 20
    shape.rotation.x = Math.random() * Math.PI
    shape.rotation.y = Math.random() * Math.PI
    shapes.push(shape)
    scene.add(shape)
  }
  
  camera.position.z = 5
  
  function animate() {
    requestAnimationFrame(animate)
    
    shapes.forEach((shape, index) => {
      shape.rotation.x += 0.01
      shape.rotation.y += 0.01
      shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001
    })
    
    renderer.render(scene, camera)
  }
  
  animate()
  
  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
