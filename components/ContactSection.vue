<template>
  <section id="contact" class="section-padding bg-gray-900">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          Get In <span class="text-primary-400">Touch</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto font-body">
          Ready to start your next project? We'd love to hear from you. 
          Let's discuss how we can help bring your vision to life.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class="animate-on-scroll">
          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 hover:from-white/15 hover:to-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-black/30 p-8">
            <h3 class="text-2xl font-semibold text-white mb-6 font-display">Send us a message</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2 font-body">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 font-body"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2 font-body">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 font-body"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 font-body"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                  <label for="company" class="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Company
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 font-body"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label for="service" class="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 font-body"
                >
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="branding">Branding</option>
                  <option value="consulting">Consulting</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                  <label for="budget" class="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Project Budget
                </label>
                <select
                  id="budget"
                  v-model="form.budget"
                  class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 font-body"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>
              
              <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-xl focus:from-white/15 focus:to-white/10 focus:border-primary-400/50 focus:shadow-lg focus:shadow-primary-500/25 resize-none font-body"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="animate-on-scroll">
          <div class="space-y-8">
            <!-- Contact Info -->
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 hover:from-white/15 hover:to-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-black/30 p-8">
              <h3 class="text-2xl font-semibold text-white mb-6 font-display">Contact Information</h3>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1 font-display">Email</h4>
                    <p class="text-gray-300 font-body">hello@fivetwentyfour.com</p>
                    <p class="text-gray-300 font-body">projects@fivetwentyfour.com</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1 font-display">Phone</h4>
                    <p class="text-gray-300 font-body">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1 font-display">Location</h4>
                    <p class="text-gray-300 font-body">San Francisco, CA</p>
                    <p class="text-gray-300 font-body">Remote & On-site</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Response Time -->
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 class="text-2xl font-semibold mb-4">Quick Response</h3>
              <p class="text-primary-100 mb-6">
                We typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call us directly.
              </p>
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-lg font-semibold">24 Hours</div>
                  <div class="text-primary-100 text-sm">Average Response Time</div>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 hover:from-white/15 hover:to-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-black/30 p-8">
              <h3 class="text-2xl font-semibold text-white mb-6">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:from-primary-500/20 hover:to-primary-600/20 hover:border-primary-400/30 rounded-xl flex items-center justify-center transition-all duration-200">
                  <svg class="w-6 h-6 text-gray-300 hover:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:from-primary-500/20 hover:to-primary-600/20 hover:border-primary-400/30 rounded-xl flex items-center justify-center transition-all duration-200">
                  <svg class="w-6 h-6 text-gray-300 hover:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:from-primary-500/20 hover:to-primary-600/20 hover:border-primary-400/30 rounded-xl flex items-center justify-center transition-all duration-200">
                  <svg class="w-6 h-6 text-gray-300 hover:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    }
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(async () => {
  if (process.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate form elements on focus
    const formInputs = document.querySelectorAll('input, textarea, select')
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out"
        })
      })
      
      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        })
      })
    })
  }
})
</script>
