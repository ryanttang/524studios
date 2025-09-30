# FiveTwentyFour Studios - Boutique Web Design Agency

A modern, minimal, and stylish one-page website for FiveTwentyFour Studios, a boutique web design agency. Built with Nuxt 3, GSAP, Tailwind CSS, Headless UI, and Three.js.

## Features

- **Modern Design**: Clean, minimal, and professional design that reflects the agency's brand
- **Smooth Animations**: GSAP-powered animations and scroll effects for enhanced user experience
- **Interactive Elements**: Three.js background animations and interactive components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Interactive portfolio section with filtering
- **SEO Optimized**: Built with SEO best practices in mind

## Sections

1. **Navigation**: Fixed navbar with smooth scrolling
2. **Hero Section**: Eye-catching hero with animated background and call-to-action
3. **Services**: Comprehensive services showcase with icons and descriptions
4. **Portfolio**: Interactive portfolio with filtering capabilities
5. **About**: Agency story, values, and team information
6. **Contact**: Contact form and business information
7. **Footer**: Links, social media, and company information

## Technology Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **3D Graphics**: Three.js
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **TypeScript**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fivetwentyfour-studios
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
fivetwentyfour-studios/
├── assets/
│   └── css/
│       └── tailwind.css
├── components/
│   ├── AboutSection.vue
│   ├── ContactSection.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   ├── Navbar.vue
│   ├── PortfolioSection.vue
│   └── ServicesSection.vue
├── pages/
│   └── index.vue
├── app.vue
├── nuxt.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `theme.extend.colors` section.

### Content
Update the content in each component file to match your agency's information:
- Company name and branding
- Services offered
- Portfolio projects
- Team information
- Contact details

### Animations
GSAP animations can be customized in each component's `onMounted` hook.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:
- Lazy loading of components
- Optimized images and assets
- Efficient animations
- Minimal bundle size

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact hello@fivetwentyfour.com
# 524studios
