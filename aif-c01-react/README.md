# AIF-C01 Quick Revision Notes - React App

A fully interactive React application for studying AWS Certified AI Practitioner (AIF-C01) exam notes. This project was converted from a static HTML file into a modern React application using Vite.

## Features

- 📚 **6 Days of Study Material** - Comprehensive coverage of all exam domains
- 🔍 **Real-time Search** - Search across all concepts, services, and keywords
- 🎨 **Modern UI** - Dark theme with color-coded domains
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast Navigation** - Tab-based navigation between different days
- 🎯 **Exam Focus** - Organized by exam weight (Domain 3 is 28% - highest!)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Syne and JetBrains Mono fonts

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
   ```bash
   cd aif-c01-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
aif-c01-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # App header with title
│   │   ├── SearchBar.jsx        # Search input component
│   │   ├── Tabs.jsx            # Day navigation tabs
│   │   ├── Content.jsx         # Main content wrapper
│   │   ├── AllDaysPanel.jsx    # View all days at once
│   │   ├── DayPanel.jsx        # Individual day view
│   │   └── Section.jsx         # Section card component
│   ├── data/
│   │   └── notesData.js        # All study material data
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # Application styles
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Exam Coverage

### Domain Breakdown

- **Domain 1 (20%)** - Days 1-2: AI/ML Fundamentals, Data & Evaluation
- **Domain 2 (24%)** - Day 3: Fundamentals of Generative AI
- **Domain 3 (28%)** ⭐ - Days 4-5: Applications of Foundation Models (Highest weight!)
- **Domain 4 (14%)** - Day 6: Responsible AI

### Key Topics Covered

- AI/ML hierarchy and types
- ML lifecycle and AWS services
- Data preprocessing and feature engineering
- Foundation models and LLMs
- RAG (Retrieval Augmented Generation)
- Amazon Bedrock and Bedrock Agents
- Fine-tuning vs RAG strategies
- Responsible AI principles
- SageMaker Clarify for bias detection
- And much more!

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to any static hosting service (Netlify, Vercel, AWS S3 + CloudFront, etc.).

## License

This is a study resource for the AWS Certified AI Practitioner exam.

## Acknowledgments

Original content compiled for AIF-C01 exam preparation.
