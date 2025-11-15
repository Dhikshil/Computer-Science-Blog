import { API_BASE_URL, getAuthToken, createHeaders } from "../config/app";


export const getAllArticles = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    if (filters.page) queryParams.append('page', filters.page);
    if (filters.limit) queryParams.append('limit', filters.limit);
    if (filters.search) queryParams.append('search', filters.search);
    if (filters.category) queryParams.append('category', filters.category);
    
    const response = await fetch(`${API_BASE_URL}/articles?${queryParams}`);
    
    const data = await response.json();

    return data.articles    
  } catch (error) {
    throw new Error('Failed to fetch articles: ' + error.message);
  }
};

export const getArticleById = async (articleId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}`);
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch article: ' + error.message);
  }
};

export const createArticle = async (articleData) => {
  try {
    const form = new FormData();

    form.append("title", articleData.title);
    form.append("type", articleData.type);
    form.append("content", articleData.content);
    form.append("desc", articleData.desc);

    if (articleData.imageLong) form.append("imageLong", articleData.imageLong);
    if (articleData.imageShort) form.append("imageShort", articleData.imageShort);

    const token = getAuthToken();

    const response = await fetch(`${API_BASE_URL}/articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: form,
    });

    return await response.json();
  } catch (error) {
    throw new Error("Failed to create article: " + error.message);
  }
};

// Update article (owner or admin)
export const updateArticle = async (articleId, articleData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}`, {
      method: 'PUT',
      headers: createHeaders(true),
      body: JSON.stringify(articleData)
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to update article: ' + error.message);
  }
};

// Delete article (owner or admin)
export const deleteArticle = async (articleId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}`, {
      method: 'DELETE',
      headers: createHeaders(true)
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to delete article: ' + error.message);
  }
};

// Get articles by user ID
export const getArticlesByUser = async (userId, page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/user/${userId}?page=${page}&limit=${limit}`);
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch user articles: ' + error.message);
  }
};