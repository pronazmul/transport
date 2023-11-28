/* eslint-disable no-useless-catch */
import axios from 'axios'

const apiUrl = 'http://localhost:8000/api/users'
// const secretKey =
//   "74ca896d874c7ddc3dadb1d6c8c9fefc88c487690c69cfc516c9c7869591245b";

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, credentials)
    const token = response.data
    return token
  } catch (error) {
    throw error
  }
}

export const isAuthenticated = () => {
  const token = sessionStorage.getItem('authToken')
  return !!token
}
