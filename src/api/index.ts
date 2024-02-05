import axios, { type AxiosResponse, type AxiosError } from 'axios'

const baseURL = 'http://localhost:3000/api'

// Interface for user authentication response
interface AuthResponse {
  accessToken: string
  refreshToken: string
}

// Function to handle API requests
const API = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile')
  if (profile) {
    req.headers.Authorization = `Token ${JSON.parse(profile).token}`
  }
  return req
})

// Function to handle login
export const login = async (data: object): Promise<AuthResponse> => {
  try {
    const response: AxiosResponse<AuthResponse> = await API.post(
      '/auth/login',
      data
    )
    return response.data
  } catch (error) {
    handleAxiosError(error as AxiosError)
    throw error // Add this line to satisfy TypeScript return type
  }
}

// Function to handle signup
export const signup = async (data: object): Promise<object> => {
  try {
    const response: AxiosResponse<object> = await API.post('/auth/signup', data)
    return response.data
  } catch (error) {
    handleAxiosError(error as AxiosError)
    throw error // Add this line to satisfy TypeScript return type
  }
}

// Function to generate access token via refresh token
export const generateAccessToken = async (data: object): Promise<string> => {
  try {
    const response: AxiosResponse<{ accessToken: string }> = await API.post(
      '/auth/token',
      {
        data
      }
    )
    return response.data.accessToken
  } catch (error) {
    handleAxiosError(error as AxiosError)
    throw error // Add this line to satisfy TypeScript return type
  }
}

// Function to handle Axios errors
const handleAxiosError = (error: AxiosError): void => {
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
