import { API_BASE_URL, getAuthToken, createHeaders } from "../config/app";

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
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } 
    
  } catch (error) {
    console.log(error)
  }
};

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
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    }
    
  } catch (error) {
    console.log(error)
  }
};

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

export const logoutUser = async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.success) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log("Logged out")
    };
    
  } catch (error) {
    console.log(error)
  };
};