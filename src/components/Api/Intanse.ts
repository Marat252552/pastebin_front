import axios from "axios";


const Instanse = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

export default Instanse