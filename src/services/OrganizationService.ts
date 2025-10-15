import axios from 'axios'
import type { Organizer } from '@/types'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // getOrganizations(perPage: Number, page: Number) {
  //   return apiClient.get('/organizations?_limit=' + perPage + '&_page=' + page)
  // },
  // getOrganization(id: number) {
  //   return apiClient.get('/organizations/' + id)
  // },
  // saveOrganization(organization: Organizer) {
  //   return apiClient.post('/organizer', organization)
  //   }
  getOrganizers() {
    return apiClient.get('/organizers')
  }
}
