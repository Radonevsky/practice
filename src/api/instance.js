import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.realworld.io/api/',
  headers: {
    accept: 'application/json'
  }
})

export default instance
