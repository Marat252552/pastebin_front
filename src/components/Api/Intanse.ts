import axios from "axios";
import { backend_url } from "../../config/env";



const Instanse = axios.create({
    baseURL: backend_url
})

export default Instanse