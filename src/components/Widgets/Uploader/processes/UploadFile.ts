import Instanse from "../../../Api/Intanse"


const UploadFileAPI = (formData: FormData) => {
    return Instanse.post('/files', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

const uploadFile = async (options: any, session_id: string) => {
    const { onSuccess, onError, file, onProgress } = options;

    let {uid} = file

    onProgress(20)
    let formData = new FormData()
    formData.append('file', file)
    formData.append('uid', uid)
    formData.append('session_id', session_id)
    try {
        await UploadFileAPI(formData)
        onProgress(100)
        onSuccess()
    } catch(e) {
        console.log(e)
        onError()
    }
}

export default uploadFile