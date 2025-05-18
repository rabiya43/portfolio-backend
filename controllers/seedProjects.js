const axios = require('axios');

const seedData = [
  {
    title: "Fayda Run",
    description: "Game Development Project",
    type: "video",
    media: "Fayda-Run.mp4"
  },
  {
    title: "Emoji Detector",
    description: "Software Project (In Process)",
    type: "image",
    media: "Emoji-Detector.jpg"
  }
];

async function seedProjects() {
  try {
    for (let proj of seedData) {
      const res = await axios.post('http://localhost:5000/api/projects', proj);
      console.log('Inserted:', res.data);
    }
    console.log('✅ All project entries inserted.');
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
  }
}

seedProjects();
