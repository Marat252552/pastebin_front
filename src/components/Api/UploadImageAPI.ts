import axios from "axios"



const UploadImageAPI = (formData: any) => {
    return axios.post('http://localhost:3000/files', formData)
}

export default UploadImageAPI