import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

// Function to handle API requests
const API = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile')
  if (profile) {
    req.headers.Authorization = `Token ${JSON.parse(profile).accessToken}`
  }
  return req
})

// Axios response interceptor to handle token expiration
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      try {
        // Get the refresh token from the profile and then renew the access token
        const savedProfile = localStorage.getItem('profile')
        const refreshToken = JSON.parse(savedProfile).refreshToken
        const accessToken = await generateAccessToken({ refreshToken })
        // Update the token in the profile
        const profile = JSON.parse(savedProfile)
        profile.accessToken = accessToken
        localStorage.setItem('profile', JSON.stringify(savedProfile))
        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Token ${accessToken}`
        return API(originalRequest)
      } catch (error) {
        handleAxiosError(error)
        throw error
      }
    }
    return Promise.reject(error)
  }
)
// 1. AUTH
// Function to handle login
export const login = async (data) => {
  try {
    const response = await API.post('/auth/login', data)
    return response.data
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

// Function to handle signup
export const signup = async (data) => {
  try {
    const response = await API.post('/auth/signup', data)
    return response.data
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

// Function to generate access token via refresh token
export const generateAccessToken = async (data) => {
  try {
    const response = await API.post('/auth/token', {
      data,
    })
    return response.data.accessToken
  } catch (error) {
    handleAxiosError(error)
    throw error // Add this line to satisfy TypeScript return type
  }
}

// 2. USER
// Function to fetch user profile
export const fetchUserProfile = async () => {
  try {
    const response = await API.get('/user/me')
    return response.data.user
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

// Function to handle Axios errors
const handleAxiosError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw new Error(error.message)
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('No response received from the server.')
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error('Error setting up the request.')
  }
}
