export const profile = {
  name: 'Hussain Ammar',
  role: 'Python Developer',
  email: 'hussainammar252@gmail.com',
  whatsapp: 'https://wa.me/917004487390',
  location: 'Hyderabad, India',
  github: 'https://github.com/hussainammar123',
  linkedin: 'https://linkedin.com/in/hussain-ammar-8208b31a9',
  graduationYear: '2026',
  cgpa: '7.98',
}

export const projects = [
  {
    number: '01',
    category: 'AI · Computer vision',
    title: 'Food, made measurable.',
    name: 'Calorie Estimation',
    description:
      'An image-based calorie estimator pairing a TensorFlow vision model with a modular Flask REST API.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'A colorful, carefully arranged fresh meal',
    stack: ['Python', 'TensorFlow', 'Flask', 'REST API'],
    featured: true,
  },
  {
    number: '02',
    category: 'Machine learning · Data',
    title: 'A little clarity in the numbers.',
    name: 'Gold Price Analysis',
    description:
      'Historical prices meet clean data: Python and SQL for analysis, with machine learning to explore short-term trends.',
    image:
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Close-up of warm-toned gold bars',
    stack: ['Python', 'SQL', 'Machine learning', 'HTML/CSS'],
    featured: false,
  },
  {
    number: '03',
    category: 'Machine learning · Regression',
    title: 'Turning property data into perspective.',
    name: 'House Price Prediction',
    description:
      'A practical regression project bringing together cleaned housing data, thoughtful feature engineering, and a clear results page.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'A welcoming modern home with its front door in view',
    stack: ['Python', 'SQL', 'Regression', 'HTML/CSS'],
    featured: false,
  },
]

export const skillGroups = [
  {
    number: '01',
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Frameworks & APIs',
    skills: ['Django', 'Flask', 'FastAPI', 'Node.js'],
  },
  {
    number: '03',
    title: 'Web & data',
    skills: ['React', 'HTML5', 'CSS3', 'SQL', 'PostgreSQL', 'MySQL'],
  },
  {
    number: '04',
    title: 'Exploring',
    skills: ['TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'Git'],
  },
]

export function getAnswer(question: string) {
  const text = question.toLowerCase()

  if (/project|work|built|calorie|gold|house|portfolio/.test(text)) {
    return 'I’ve worked on three projects: a TensorFlow and Flask calorie estimator, a Python and SQL gold-price analysis, and a machine-learning house-price predictor. The calorie estimator combines image classification with a modular REST API. Scroll to Selected work to explore them.'
  }

  if (/skill|tech|stack|language|framework|python|react|tensorflow|sql/.test(text)) {
    return 'Python is my main focus. I also work with Java and JavaScript; Django, Flask and FastAPI; React, HTML and CSS; and SQL databases. I’m familiar with TensorFlow, scikit-learn, NumPy and Pandas.'
  }

  if (/study|education|college|degree|university|graduate/.test(text)) {
    return 'I graduated with a Bachelor of Engineering in Information Technology from Lords Institute of Engineering & Technology in Hyderabad in 2026. My CGPA was 7.98.'
  }

  if (/contact|email|hire|connect|reach/.test(text)) {
    return `I’m open to opportunities and happy to connect. You can email me at ${profile.email}, or find me on LinkedIn and GitHub using the links at the bottom of this page.`
  }

  if (/who|about|hussain|background|introduce|hello|hi\b/.test(text)) {
    return 'I’m Hussain Ammar, a Python developer and Information Technology graduate based in Hyderabad. I enjoy turning data and machine-learning ideas into practical projects, and I’m looking for opportunities to keep learning and contribute.'
  }

  return 'I can tell you about Hussain’s background, projects, technical skills, education, or how to get in touch. What would you like to know?'
}

export type ChatMessage = {
  id: number
  from: 'visitor' | 'assistant'
  text: string
}
