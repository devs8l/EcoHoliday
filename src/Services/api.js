// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Booking error:', error.response?.data || error.message);
    throw error;
  }
};

// Add other API methods as needed
export const getBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};