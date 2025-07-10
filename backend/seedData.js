const mongoose = require('mongoose');
const Flight = require('./models/Flight');
require('dotenv').config();

const sampleFlights = [
  {
    destination: 'Paris, France',
    date: new Date('2024-03-15'),
    price: 899,
    seats: 45,
    airline: 'GlobeVista Airlines',
    departureTime: '10:30 AM'
  },
  {
    destination: 'Tokyo, Japan',
    date: new Date('2024-03-20'),
    price: 1299,
    seats: 32,
    airline: 'GlobeVista Airlines',
    departureTime: '2:15 PM'
  },
  {
    destination: 'New York, USA',
    date: new Date('2024-03-18'),
    price: 649,
    seats: 58,
    airline: 'GlobeVista Airlines',
    departureTime: '8:45 AM'
  },
  {
    destination: 'Sydney, Australia',
    date: new Date('2024-03-25'),
    price: 1499,
    seats: 28,
    airline: 'GlobeVista Airlines',
    departureTime: '11:20 PM'
  },
  {
    destination: 'London, UK',
    date: new Date('2024-03-22'),
    price: 799,
    seats: 52,
    airline: 'GlobeVista Airlines',
    departureTime: '9:15 AM'
  },
  {
    destination: 'Dubai, UAE',
    date: new Date('2024-03-28'),
    price: 1099,
    seats: 38,
    airline: 'GlobeVista Airlines',
    departureTime: '3:30 PM'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/globevista');
    console.log('Connected to MongoDB');

    // Clear existing flights
    await Flight.deleteMany({});
    console.log('Cleared existing flights');

    // Insert sample flights
    const flights = await Flight.insertMany(sampleFlights);
    console.log(`Inserted ${flights.length} sample flights`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 