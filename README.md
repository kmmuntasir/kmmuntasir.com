# 🌊 Muntasir Billah Munna - Portfolio Website

A professional, nerdy, and geeky portfolio website built with React.js and Vite, showcasing the career and projects of a Senior Staff Software Engineer.

## 🚀 Features

- **Modern React.js Architecture**: Built with React.js 19+ and Vite for optimal performance
- **Mobile-Responsive Design**: Fully responsive design that works on all devices
- **React Router Navigation**: Smooth client-side routing with React Router DOM
- **Nerdy/Geeky Design**: Monospace fonts (Fira Code), grayscale color scheme, no animations
- **Professional Sections**: Home, About, Experience, Projects, Skills, and Contact pages
- **Timeline Experience**: Visual timeline for professional and teaching experience
- **Project Portfolio**: Comprehensive showcase of projects across different companies
- **Skills Categorization**: Organized technical skills by categories
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🎨 Design System

Following the design guide specifications:
- **Colors**: White, Ash (#f5f5f5), Grey (#808080), Black (#000000)
- **Typography**: Fira Code monospace font family
- **No Animations**: Clean, static design focused on content
- **Professional Layout**: Cards, grids, and timeline components

## 🛠️ Tech Stack

- **Frontend**: React.js 19.1.0
- **Build Tool**: Vite 7.0.0
- **Routing**: React Router DOM 7.1.1
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Fira Code)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Navigation bar with mobile menu
│   └── Footer.jsx        # Footer component
├── pages/
│   ├── Home.jsx          # Hero section and introduction
│   ├── About.jsx         # Personal information and summary
│   ├── Experience.jsx    # Professional and teaching timeline
│   ├── Projects.jsx      # Portfolio projects by company
│   ├── Skills.jsx        # Technical skills and achievements
│   └── Contact.jsx       # Contact information and links
├── data/
│   ├── basic.json        # Personal and contact information
│   ├── experience.json   # Professional work experience
│   ├── portfolio.json    # Projects and portfolio items
│   ├── skills.json       # Technical skills by category
│   └── teaching.json     # Teaching experience
├── App.jsx               # Main app component with routing
├── main.jsx              # React app entry point
└── index.css             # Custom CSS styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kmmuntasir.com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above

## 🎯 Key Sections

### Home
Hero section with name, title, and quick links to social profiles.

### About
Personal information, professional summary, and core competencies.

### Experience
Timeline view of professional experience at companies like:
- Exabyting (Senior Staff Software Engineer)
- METRO Markets (Software Engineer)
- bKash Limited (Assistant Lead Engineer & Senior Engineer)
- Smart Squirrels (Senior Software Engineer & Software Engineer)

Plus teaching experience at universities.

### Projects
Portfolio projects organized by company, including:
- **Exabyting**: Vilpak, OpenAI Training Dataset Generator, Empatick
- **METRO Markets**: Delivery tracking, returns automation, label generation
- **Smart Squirrels**: ERP systems, POS software, inventory management
- **Freelance**: Mobile apps, admin panels, backend systems
- **Personal**: ISP management, online judge, library systems

### Skills
Technical skills categorized into:
- Programming Languages
- Frameworks & Libraries
- Cloud & DevOps
- Databases
- Message Queues

### Contact
Multiple ways to get in touch including email, phone, and social media links.

## 🔧 Customization

### Updating Content
All content is stored in JSON files in the `src/data/` directory:
- `basic.json`: Personal information and contact details
- `experience.json`: Work experience entries
- `portfolio.json`: Project portfolio items
- `skills.json`: Technical skills arrays
- `teaching.json`: Teaching experience entries

### Styling
The design system uses CSS custom properties (variables) defined in `src/index.css`. Key variables include:
- Colors: `--color-white`, `--color-ash`, `--color-grey`, `--color-black`
- Typography: `--font-family`, font size variables
- Spacing: `--spacing-xs` through `--spacing-3xl`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Muntasir Billah Munna**
- Email: kmmuntasir@gmail.com
- GitHub: [github.com/kmmuntasir](https://github.com/kmmuntasir)
- LinkedIn: [linkedin.com/in/kmmuntasir](https://linkedin.com/in/kmmuntasir)
- Website: [kmmuntasir.com](https://kmmuntasir.com)

---

Built with ❤️ using React.js & Vite
