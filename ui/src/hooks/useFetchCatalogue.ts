import axios from 'axios'
import { useQuery } from 'react-query'

const fetchServices = () => {
  return axios.get(process.env.API_URL + '/api/catalogue/services')
}

const useFetchCatalogueServices = () => {
  const response = useQuery('catalogue-services', fetchServices)

  return { ...response }
}

export default useFetchCatalogueServices
