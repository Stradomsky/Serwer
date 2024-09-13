import mongoose from 'mongoose';
import connectDB from './connect.js';
import { User } from '../models/users.js'; 

export const initDatabase = async () => {

  const users = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Kowalski',
      role: 'Admin',
      passwords: { email: 'jan@example.com', password: 'password123' }
    },
    {
      id: 2,
      firstName: 'Michal',
      lastName: 'Michalski',
      role: 'Developer',
      passwords: { email: 'michal@example.com', password: 'password123' }
    },
    {
      id: 3,
      firstName: 'Piotr',
      lastName: 'Nowak',
      role: 'DevOps',
      passwords: { email: 'piotr@example.com', password: 'password123' }
    }
  ];

  try {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log('Database initialized with sample data');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};