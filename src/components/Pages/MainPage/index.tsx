import Uploader from "../../Widgets/Uploader"
import { useForm } from "react-hook-form"
import { Inputs_T } from "./lib/types"
import CreatePinAPI from "../../Api/CreatePinAPI"
import { useEffect, useState } from 'react'
import { v4 } from "uuid"
import { useNavigate } from 'react-router-dom'
import SwitchField from "./components/SwitchField"
import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"
import NameField from "./components/NameField"
import MuiTextField from "./components/MuiTextField"
import Button from "./components/Button"
import styles from './lib/styles.module.css'
import { Spin, message } from "antd"
import { LoadingOutlined } from "@ant-design/icons"



const MainPage = () => {

    let [session_id, setSession_id] = useState<string>('')
    let generateSessionID = () => {
        let new_session_id = v4()
        setSession_id(new_session_id)
    }
    useEffect(() => {
        generateSessionID()
    }, [])

    let [isLoading, setIsLoading] = useState<boolean>(false)
    let navigate = useNavigate()

    const onSubmit = async ({ files_UIDs, text, title, one_read }: Inputs_T) => {
        setIsLoading(true)
        try {
            let response = await CreatePinAPI({ files_UIDs, text, session_id, title, one_read })
            navigate('/completed/' + response.data.pin_id)
        } catch (e) {
            console.log(e)
            error('Ошибка создания. Попробуйте позже')
        } finally {
            setIsLoading(false)
        }
    }

    const [messageApi, contextHolder] = message.useMessage();

    const error = (value: string) => {
        messageApi.open({
            type: 'error',
            content: value,
        });
    };

    let { register, handleSubmit, formState: { errors }, getValues } = useForm<Inputs_T>({
        mode: 'onChange',
        defaultValues: {
            one_read: false
        }
    })

    return <>
        <PageMainTemplate>
                
                {contextHolder}

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles.container}>

                        <h3 style={{ fontFamily: 'Montserrat', textAlign: 'center' }}>Создайте свой уникальный bin</h3>

                        <NameField
                            errors={errors}
                            register={register}
                        />

                        <MuiTextField
                            errors={errors}
                            register={register}
                        />

                        <SwitchField
                            register={register}
                        />

                        <Uploader
                            getValues={getValues}
                            register={register}
                            session_id={session_id}
                        />

                        {
                            (isLoading) ?
                                <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />} />
                                :
                                <Button>Создать</Button>
                        }

                    </div>

                </form>

        </PageMainTemplate>
    </>

}

export default MainPage