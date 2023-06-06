import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import Uploader from "../../Widgets/Uploader"
import { useForm } from "react-hook-form"
import { Inputs_T } from "./lib/types"
import CreatePinAPI from "../../Api/CreatePinAPI"
import { useEffect, useState } from 'react'
import { v4 } from "uuid"
import TitleField from "./components/TitleField"
import TextField from "./components/TextField"
import { useNavigate } from 'react-router-dom'
import SwitchField from "./components/SwitchField"
import ModalWindow from "./components/ModalWindow"
import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"



const MainPage = () => {

    let { register, handleSubmit, formState: { errors }, getValues } = useForm<Inputs_T>({
        mode: 'onChange',
        defaultValues: {
            one_read: false
        }
    })

    let [session_id, setSession_id] = useState<string>('')

    let generateSessionID = () => {
        let new_session_id = v4()
        setSession_id(new_session_id)
    }
    useEffect(() => {
        generateSessionID()
    }, [])

    let navigate = useNavigate()

    const onSubmit = async ({ files_UIDs, text, title, one_read }: Inputs_T) => {
        try {
            let response = await CreatePinAPI({ files_UIDs, text, session_id, title, one_read })
            navigate('/completed/' + response.data.pin_id)
        } catch (e) {
            console.log(e)
        }
    }

    return <>
        <PageMainTemplate>
            <LargeMaxFullWidthTemplate>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px' }}>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            <TitleField
                                errors={errors}
                                register={register}
                            />

                            <TextField
                                errors={errors}
                                register={register}
                            />

                            <SwitchField
                                register={register}
                            />

                            <ModalWindow />


                            <Uploader
                                getValues={getValues}
                                register={register}
                                session_id={session_id}
                            />

                            <button style={{padding: '10px', fontFamily: 'Montserrat', fontSize: '20px'}}>Создать</button>
                        </div>

                    </form>

                </div>

            </LargeMaxFullWidthTemplate>
        </PageMainTemplate>
    </>

}

export default MainPage