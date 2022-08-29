import axios from 'axios'

const headers = {
    'Content-Type': 'text/plain'
}; 

export default {
    async post(endpoint, data) {
        const response = await axios.post(endpoint, data, headers)
        return response.data
    }
}