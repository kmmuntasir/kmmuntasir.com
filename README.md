# Muntasir Billah Munna - Portfolio Website

A modern, responsive portfolio website built with React.js and Vite, showcasing professional experience, projects, and skills of a Senior Staff Software Engineer with 12+ years of experience.

## 🌟 Features

- **Modern Design**: Clean, professional design following a light blue design system
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **React Router**: Smooth navigation between different sections
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **Accessible**: WCAG AA compliant with proper focus states and semantic HTML
- **SEO Optimized**: Proper meta tags and semantic structure

## 🚀 Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Custom CSS with design system
- **Font**: Inter (Google Fonts)

## 📱 Sections

- **Home**: Hero section with introduction and social links
- **About**: Personal information and teaching experience
- **Experience**: Professional work history with detailed achievements
- **Projects**: Portfolio showcase organized by company/category
- **Skills**: Technical skills categorized by type
- **Contact**: Contact information and social media links

## 🎨 Design System

The website follows a light, modern design system with:

- **Primary Color**: Sky Blue (#60A5FA)
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable cards, buttons, and navigation elements
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Navigation.jsx
│   ├── data/
│   │   ├── basic.json
│   │   ├── experience.json
│   │   ├── portfolio.json
│   │   ├── skills.json
│   │   └── teaching.json
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 📊 Data Structure

The website uses JSON files to store content:

- `basic.json`: Personal information and social links
- `experience.json`: Professional work history
- `portfolio.json`: Projects organized by company
- `skills.json`: Technical skills categorized by type
- `teaching.json`: Academic teaching experience

## 🎯 Key Features

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with slide-down navigation

### Professional Experience Timeline
- Detailed 12+ years work history with company links
- Technology stacks for each role
- Key achievements and responsibilities

### Project Portfolio
- Organized by company/category
- External links where available
- Technology tags for each project

### Skills Showcase
- Categorized technical skills
- Professional statistics
- Key competencies breakdown

### Contact Integration
- Direct email and phone links
- Social media integration
- Professional networking links

## 🔧 Customization

To customize the website with your own information:

1. **Update data files** in `src/data/` with your information
2. **Modify colors** in `src/index.css` CSS variables
3. **Add/remove sections** by updating routes in `App.jsx`
4. **Update meta tags** in `index.html` for SEO

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Vercel**: `npm run build` then deploy `dist` folder
- **Netlify**: Connect repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload `dist` folder to S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Muntasir Billah Munna**
- Email: kmmuntasir@gmail.com
- LinkedIn: [linkedin.com/in/kmmuntasir](https://linkedin.com/in/kmmuntasir)
- GitHub: [github.com/kmmuntasir](https://github.com/kmmuntasir)
- Website: [kmmuntasir.com](https://kmmuntasir.com)

---

Built with ❤️ using React.js and Vite
