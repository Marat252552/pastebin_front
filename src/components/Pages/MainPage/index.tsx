import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import Header from "../../Widgets/Header"
import Uploader from "../../Widgets/Uploader"
import { Button } from "antd"
import { useForm } from "react-hook-form"
import { Inputs_T } from "./lib/types"
import CreatePinAPI from "../../Api/CreatePinAPI"
import { useEffect, useState } from 'react'
import { v4 } from "uuid"
import TitleField from "./components/TitleField"
import TextField from "./components/TextField"



const MainPage = () => {

    let { register, handleSubmit, formState: {errors} } = useForm<Inputs_T>({
        mode: 'onChange'
    })

    let [session_id, setSession_id] = useState<string>('')

    let generateSessionID = () => {
        let new_session_id = v4()
        setSession_id(new_session_id)
    }
    useEffect(() => {
        generateSessionID()
    }, [])

    const onSubmit = async ({ files_UIDs, text, title }: Inputs_T) => {
        try {
            await CreatePinAPI({ files_UIDs, text, session_id, title })
        } catch (e) {
            console.log(e)
        }
    }



    return <LargeMaxFullWidthTemplate>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px' }}>
            <Header />

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

                    <Uploader
                        register={register}
                        session_id={session_id}
                    />

                    <button >Создать</button>
                    <Button>Создать bin</Button>
                </div>

            </form>

        </div>
    </LargeMaxFullWidthTemplate>
}

export default MainPage