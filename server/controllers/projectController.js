const projectsData = [
  {
    id: 1,
    type: 'AI',
    title: 'AI-Powered Cry Detection System',
    description: 'Detects infant cry type using deep learning with 92% classification accuracy.',
    technologies: ['Python', 'CNN', 'LSTM', 'Flask', 'PyTorch'],
    github: 'https://github.com/yourusername/cry-detection',
    live: 'https://cry-detection-demo.com',
    metrics: {
      accuracy: '92%',
      latency: '< 100ms',
      features: 'Real-time prediction API'
    }
  },
  {
    id: 2,
    type: 'AI',
    title: 'Resume Analyzer',
    description: 'ML-powered resume analyzer that extracts skills and compares with job requirements.',
    technologies: ['Python', 'NLP', 'React', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/resume-analyzer',
    live: 'https://resume-analyzer-tool.com',
    metrics: {
      accuracy: '88%',
      processing: '< 2 seconds',
      features: 'Skill extraction & matching'
    }
  },
  {
    id: 3,
    type: 'FullStack',
    title: 'AbodeAway',
    description: 'Full-stack property rental platform with real-time booking and payments.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/yourusername/abodeaway',
    live: 'https://abodeaway.com',
    metrics: {
      users: '5000+',
      listings: '1000+',
      features: 'Secure payments, real-time notifications'
    }
  },
  {
    id: 4,
    type: 'FullStack',
    title: 'SwapNest',
    description: 'Community marketplace for item exchange with AI-powered recommendations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'TensorFlow'],
    github: 'https://github.com/yourusername/swapnest',
    live: 'https://swapnest.com',
    metrics: {
      items: '10000+',
      transactions: '50000+',
      features: 'Real-time chat, smart recommendations'
    }
  }
];

export const getAllProjects = async (req, res) => {
  try {
    res.json({
      success: true,
      data: projectsData,
      total: projectsData.length,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project' });
  }
};

export const getProjectsByType = async (req, res) => {
  try {
    const { type } = req.query;

    let filtered = projectsData;
    if (type) {
      filtered = projectsData.filter(p => p.type === type);
    }

    res.json({
      success: true,
      data: filtered,
      total: filtered.length,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};
