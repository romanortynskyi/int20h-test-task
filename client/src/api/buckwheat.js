import axios from 'axios'
import { apiURL } from './config'
export const api = {
    get: async (query = {}) => {
        const {
            minPrice,
            maxPrice,
            weights,
            priceOrder,
        } = query
        
        const searchParams = new URLSearchParams()
        if(minPrice && maxPrice && weights && priceOrder) {
            searchParams.set('minPrice', minPrice)
            searchParams.set('maxPrice', maxPrice)
            searchParams.set('weights', weights.join(','))
            searchParams.set('priceOrder', priceOrder)
        }
        
        const searchStr = searchParams.toString()
        const response = await axios.get(`${apiURL}/buckwheat?${searchStr}`)
        return response
    }
}