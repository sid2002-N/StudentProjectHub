export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  categories: ('ml' | 'web' | 'data' | 'auto')[];
  tech: string[];
  features: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sentiment Analysis Model",
    shortDescription: "Natural language processing system for analyzing customer feedback sentiment with 92% accuracy.",
    description: "A sophisticated machine learning model designed to analyze and classify customer feedback sentiment with high accuracy. The system processes natural language input and determines whether the sentiment is positive, negative, or neutral.",
    categories: ['ml'],
    tech: ["Python", "TensorFlow", "NLTK", "scikit-learn", "Pandas"],
    features: [
      "92% accuracy on test datasets",
      "Multi-language support (English, Spanish, French)",
      "Real-time processing capabilities",
      "Customizable sentiment thresholds",
      "Exportable results in multiple formats"
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "E-Learning Dashboard",
    shortDescription: "Interactive learning platform with progress tracking, quiz modules, and responsive design.",
    description: "A comprehensive e-learning platform built with React that enables students to track their progress, access course materials, and complete interactive quizzes. The responsive design ensures accessibility across all devices.",
    categories: ['web'],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "User authentication and progress tracking",
      "Interactive quiz modules with instant feedback",
      "Responsive design for all device sizes",
      "Content management system for instructors",
      "Real-time notifications and reminders"
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Market Analysis Dashboard",
    shortDescription: "Comprehensive data analysis system with interactive visualizations for market trends exploration.",
    description: "A data-driven dashboard that visualizes market trends and consumer behavior through interactive charts and graphs. This Tableau-based solution allows users to explore complex datasets through an intuitive interface.",
    categories: ['data'],
    tech: ["Tableau", "SQL", "Python", "R", "Data Cleaning"],
    features: [
      "Interactive visualization of market trends",
      "Customizable reporting options",
      "Automated data refresh capabilities",
      "Export functionality for presentations",
      "Drill-down analysis for detailed insights"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Workflow Automation Tool",
    shortDescription: "Task automation system that reduced manual processing time by 85% for administrative workflows.",
    description: "An automation solution that streamlined administrative processes by implementing Python scripts to handle repetitive tasks. This project significantly reduced manual processing time for document handling and data entry.",
    categories: ['auto'],
    tech: ["Python", "Selenium", "PyAutoGUI", "pandas", "Regular Expressions"],
    features: [
      "Reduced manual processing time by 85%",
      "Automated email classification and response",
      "Scheduled data backup and verification",
      "Error logging and notification system",
      "User-friendly control interface"
    ],
    image: "https://images.unsplash.com/photo-1573167710091-05db7237edd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Image Recognition App",
    shortDescription: "Web application with ML-based image classification capabilities for educational purposes.",
    description: "A web application that utilizes machine learning algorithms to identify and classify objects in uploaded images. The system was built for educational purposes to demonstrate practical applications of computer vision.",
    categories: ['ml', 'web'],
    tech: ["TensorFlow.js", "React", "Node.js", "Express", "MongoDB"],
    features: [
      "Real-time image classification",
      "Support for multiple ML models",
      "Camera integration for instant capture",
      "Classification history and comparison",
      "Educational mode with explanation of results"
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Predictive Analysis System",
    shortDescription: "Advanced predictive modeling for financial data with interactive reporting dashboards.",
    description: "An advanced financial data analysis system that uses machine learning to predict market trends and investment opportunities. The platform includes interactive dashboards for exploring historical data and forecasts.",
    categories: ['data', 'ml'],
    tech: ["Python", "scikit-learn", "TensorFlow", "Plotly", "SQL"],
    features: [
      "Time-series analysis and forecasting",
      "Risk assessment calculations",
      "Multiple prediction models comparison",
      "Interactive visualization dashboards",
      "Automated reporting and alerts"
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
