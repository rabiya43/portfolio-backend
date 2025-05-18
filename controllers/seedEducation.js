const axios = require('axios');

const seedData = [
  {
    title: "Bachelor in Artificial Intelligence",
    institution: "ITU",
    duration: "2023 - 2027",
    image: "AI.jpeg"
  },
  {
    title: "I.Cs Physics",
    institution: "Kinnaird College",
    duration: "2021 - 2023",
    image: "Physics.jpeg"
  }
];

async function seedEducation() {
  try {
    for (let edu of seedData) {
      const res = await axios.post('http://localhost:5000/api/education', edu);
      console.log('Inserted:', res.data);
    }
    console.log('✅ All education entries inserted.');
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
  }
}

seedEducation();
