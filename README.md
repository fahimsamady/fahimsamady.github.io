# Fahim Samady - Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases Fahim's skills, experience, projects, and provides a professional way for potential clients and employers to learn about his work.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth scrolling, hover effects, and micro-interactions
- **Project Showcase**: Detailed project pages with filtering and search capabilities
- **Contact Form**: Functional contact form for inquiries
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (ready)

## 📁 Project Structure

```
fahim-portfolio/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── projects/          # Project detail pages
│   │   │   └── [id]/         # Dynamic project routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Experience.tsx     # Work experience
│   │   ├── Education.tsx      # Education section
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── Projects.tsx       # Projects grid
│   │   ├── ProjectDetail.tsx  # Individual project page
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer section
│   ├── data/                  # JSON data files
│   │   ├── profile.json       # Personal information
│   │   ├── education.json     # Education history
│   │   ├── experience.json    # Work experience
│   │   ├── skills.json        # Skills and proficiency
│   │   └── projects/          # Project data
│   │       ├── projects-list.json
│   │       └── [project-name].json
│   ├── lib/                   # Utility functions
│   │   └── data.ts           # Data loading utilities
│   └── types/                 # TypeScript type definitions
│       └── index.ts          # Interface definitions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/fahim-portfolio.git
cd fahim-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 4. Build for production

```bash
npm run build
# or
yarn build
```

## 📝 Customization

### Personal Information

Update the following files with your information:

- `src/data/profile.json` - Personal details, contact info, social links
- `src/data/education.json` - Education history
- `src/data/experience.json` - Work experience
- `src/data/skills.json` - Skills and proficiency levels

### Projects

1. **Add new projects**: Create a new JSON file in `src/data/projects/`
2. **Update project list**: Add the project to `src/data/projects/projects-list.json`
3. **Project structure**: Follow the existing project format for consistency

Example project structure:

```json
{
  "id": "project-name",
  "title": "Project Title",
  "type": "web|mobile|ai|blockchain",
  "category": "Category",
  "shortDescription": "Brief description",
  "longDescription": "Detailed description",
  "technologies": {
    "frontend": ["React", "TypeScript"],
    "backend": ["Node.js", "Express"]
  },
  "keyFeatures": ["Feature 1", "Feature 2"],
  "challenges": ["Challenge 1"],
  "solutions": ["Solution 1"],
  "keyLearnings": ["Learning 1"],
  "metrics": {
    "users": "1000+",
    "performance": "99.9%"
  }
}
```

### Styling

- **Colors**: Update CSS variables in `src/app/globals.css`
- **Theme**: Modify `tailwind.config.ts` for custom colors and animations
- **Components**: Edit individual component files for layout changes

## 🚀 Deployment

### GitHub Pages

1. **Update package.json** (already configured):

```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll"
  }
}
```

2. **Create GitHub repository** and push your code

3. **Enable GitHub Pages**:

   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: main (or your default branch)
   - Folder: / (root)

4. **Deploy**:

```bash
npm run deploy
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder after building
- **AWS S3**: Upload the `out` folder to an S3 bucket

## 📱 Responsive Design

The portfolio is fully responsive with:

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Background**: White (#FFFFFF)
- **Text**: Dark gray (#0F172A)
- **Accent**: Light blue (#EFF6FF)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600, 700)
- **Body**: Regular weight (400)
- **Sizes**: Responsive scale from 14px to 64px

### Components

- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (blue), Secondary (gray), with hover states
- **Forms**: Clean inputs with focus states and validation
- **Navigation**: Sticky header with smooth scrolling

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

### Code Style

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks

### Performance

- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components load on scroll
- **Animations**: Optimized with Framer Motion

## 📊 SEO & Performance

- **Meta Tags**: Open Graph, Twitter Cards
- **Structured Data**: Ready for rich snippets
- **Performance**: Lighthouse score optimized
- **Accessibility**: ARIA labels, semantic HTML
- **Mobile**: Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:

- Email: fahim.samady@email.com
- LinkedIn: [Fahim Samady](https://linkedin.com/in/fahimsamady)
- GitHub: [fahimsamady](https://github.com/fahimsamady)

---

**Built with ❤️ by Fahim Samady**

_This portfolio showcases modern web development practices and demonstrates the skills needed for professional software engineering roles._
