import axios from 'axios';
// essa biblioteca serve para facilitar o uso de API's externas

const api = axios.create({
    baseURL: 'https://research.jorgehabib.com/'
})

export default api;