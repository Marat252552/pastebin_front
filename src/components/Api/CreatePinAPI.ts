import { AxiosResponse } from "axios";
import Instanse from "./Intanse"

type CreatePinAPI_T = (body: {
    text: string;
    files_UIDs: string[];
    session_id: string;
    title: string;
    one_read: boolean
}) => Promise<AxiosResponse<{link: string, pin_id: string}, any>>

const CreatePinAPI: CreatePinAPI_T = (body) => {
    return Instanse.post('/pins', body)
}

export default CreatePinAPI