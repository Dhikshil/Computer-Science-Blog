// Base configuration
export const API_BASE_URL = 'http://localhost:5000/api'; // Change to your backend URL

// Helper function to get auth token from localStorage
export const getAuthToken = () => {
  console.log(localStorage.getItem('token'));
  return localStorage.getItem('token');
};

// Helper function to create headers
export const createHeaders = (includeAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
};
