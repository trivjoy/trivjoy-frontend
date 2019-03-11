import axios from 'axios'
import browserStorage from '../redux/browserStorage'

const token = browserStorage.getKey('token') || ''

export const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000',
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${token}`
  }
})
