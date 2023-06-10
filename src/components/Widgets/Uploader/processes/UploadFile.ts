import Instanse from "../../../Api/Intanse"


const UploadFileAPI = (formData: FormData) => {
    return Instanse.post('/files', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

const uploadFile = async (isFinished: boolean, setIsFinished: React.Dispatch<React.SetStateAction<boolean>>, options: any, session_id: string, callInfoModal: (text: string) => void) => {
    const { onSuccess, onError, file, onProgress } = options;

    let {uid} = file

    onProgress(20)
    let formData = new FormData()
    formData.append('file', file)
    formData.append('uid', uid)
    formData.append('session_id', session_id)
    try {
        setTimeout(() => {
            if(!isFinished) {
                callInfoModal('Первая загрузка может занимать одну минуту. Это связано с особенностями бесплатного веб хостинга')
            }
        }, 8000)
        await UploadFileAPI(formData)
        
        onProgress(100)
        onSuccess()
    } catch(e) {
        console.log(e)
        onError()
    } finally {
        setIsFinished(true)
    }
}

export default uploadFile