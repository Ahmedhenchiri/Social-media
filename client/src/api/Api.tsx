import axios from  "axios"

const api = axios.create({
    baseURL:"http://localhost:6001"
})

export default api