const axios = require('axios');

const seedData = [
  { title: 'Event Management Head', organization: 'KBW', year: '2022' },
  { title: 'VP of Event Management Society', organization: 'ITU', year: '2024' },
  { title: 'Decor Head', organization: 'GDG ITU', year: '2025' },
  { title: 'Teacher Assistant', organization: 'Database (Course)', year: '' },
  { title: 'Part-time Freelancer', organization: 'Multiple Clients', year: '2023–Present' }
];

async function seedExperience() {
  try {
    for (let exp of seedData) {
      const res = await axios.post('http://localhost:5000/api/experience', exp);
      console.log('Inserted:', res.data);
    }
    console.log('✅ All experience entries inserted.');
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
  }
}

seedExperience();
