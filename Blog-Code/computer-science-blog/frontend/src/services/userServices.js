import { API_BASE_URL, getAuthToken, createHeaders } from "../config/app";

// Get all users (admin only)
export const getAllUsers = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users?page=${page}&limit=${limit}`, {
      headers: createHeaders(true)
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch users: ' + error.message);
  }
};

// Get single user by ID
export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      headers: createHeaders(true)
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch user: ' + error.message);
  }
};

// Update user
export const updateUser = async (userId, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: createHeaders(true),
      body: JSON.stringify(userData)
    });
    
    const data = await response.json();
    
    // Update localStorage if updating current user
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser && currentUser._id === userId) {
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  } catch (error) {
    throw new Error('Failed to update user: ' + error.message);
  }
};

// Delete user (admin only)
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'DELETE',
      headers: createHeaders(true)
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to delete user: ' + error.message);
  }
};