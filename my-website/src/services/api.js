const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Auth token management
const getAuthToken = () => localStorage.getItem('authToken');
const setAuthToken = (token) => localStorage.setItem('authToken', token);
const removeAuthToken = () => localStorage.removeItem('authToken');

// API request helper
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
};

// Auth API
export const authAPI = {
  login: async (email, password) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.token) {
      setAuthToken(response.token);
    }
    
    return response;
  },

  register: async (userData) => {
    const response = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (response.token) {
      setAuthToken(response.token);
    }
    
    return response;
  },

  logout: () => {
    removeAuthToken();
  },

  getCurrentUser: () => apiRequest('/auth/me'),
};

// Appointments API
export const appointmentsAPI = {
  getAppointments: (params) => {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return apiRequest(`/appointments${queryString}`);
  },

  createAppointment: (appointmentData) => apiRequest('/appointments', {
    method: 'POST',
    body: JSON.stringify(appointmentData),
  }),

  updateAppointment: (id, data) =>
    apiRequest(`/appointments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  deleteAppointment: (id) =>
    apiRequest(`/appointments/${id}`, { method: 'DELETE' }),

  getAvailability: (date) => apiRequest(`/appointments/availability/${date}`),
};

// Services API
export const servicesAPI = {
  getServices: (category) => {
    const queryString = category ? `?category=${category}` : '';
    return apiRequest(`/services${queryString}`);
  },

  getService: (id) => apiRequest(`/services/${id}`),

  getCategories: () => apiRequest('/services/categories/list'),
};

// Blog API
export const blogAPI = {
  getPosts: (params) => {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return apiRequest(`/blog${queryString}`);
  },

  getPost: (id) => apiRequest(`/blog/${id}`),

  getCategories: () => apiRequest('/blog/categories/list'),

  getRecentPosts: (limit) => {
    const queryString = limit ? `?limit=${limit}` : '';
    return apiRequest(`/blog/recent/posts${queryString}`);
  },
};

// Contact API
export const contactAPI = {
  submitMessage: (messageData) => apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(messageData),
  }),
};

// Gallery API
export const galleryAPI = {
  getItems: (params) => {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return apiRequest(`/gallery${queryString}`);
  },

  getItem: (id) => apiRequest(`/gallery/${id}`),

  getCategories: () => apiRequest('/gallery/categories/list'),
};

// Patients API
export const patientsAPI = {
  getProfile: () => apiRequest('/patients/profile'),

  updateProfile: (profileData) => apiRequest('/patients/profile', {
    method: 'PUT',
    body: JSON.stringify(profileData),
  }),

  getMedicalRecords: () => apiRequest('/patients/medical-records'),

  getDashboard: () => apiRequest('/patients/dashboard'),
};

// Health check
export const healthAPI = {
  check: () => apiRequest('/health'),
};

export { getAuthToken, setAuthToken, removeAuthToken };