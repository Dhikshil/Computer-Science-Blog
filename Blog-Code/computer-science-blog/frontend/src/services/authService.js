import { API_BASE_URL, getAuthToken, createHeaders } from "../config/app";

// Register new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.success)
      return errorData;
    }

    const data = await response.json();
    
    if (data.success) {
      // Store token in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } 
    
  } catch (error) {
    console.log(error)
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(credentials)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    const data = await response.json();
    
    if (data.success) {
      // Store token and user data
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    }
    
  } catch (error) {
    console.log(error)
  }
};

// Get current user profile
export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: createHeaders(true)
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to get user profile: ' + error.message);
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};