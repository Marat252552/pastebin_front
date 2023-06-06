import { AxiosResponse } from "axios";
import Instanse from "./Intanse"
import { Pin_T } from "../Shared/types";

type GetPinAPI_T = ({ pin_id }: {
    pin_id: string;
}) => Promise<AxiosResponse<{pin: Pin_T}, any>>

const GetPinAPI: GetPinAPI_T = ({pin_id}: {pin_id: string}) => {
    return Instanse.get(`/pins/${pin_id}`)
}

export default GetPinAPI