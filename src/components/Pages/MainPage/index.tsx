import Uploader from "../../Widgets/Uploader"
import { useForm } from "react-hook-form"
import { Inputs_T } from "./lib/types"
import CreatePinAPI from "../../Api/CreatePinAPI"
import { useState } from 'react'
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
import SliderField from "./components/SliderField"
import CaptchaModal from "./components/CaptchaModal"


const MainPage = () => {

    console.log('main page rerendered')

    let [session_id] = useState(v4())
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let [modalActive, setModalActive] = useState<boolean>(false)

    let navigate = useNavigate()
    const onSubmit = async (values: Inputs_T) => {
        setIsLoading(true)
        try {
            let response = await CreatePinAPI({ session_id, ...values })
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

    let { register, handleSubmit, formState: { errors, isValid }, getValues, trigger } = useForm<Inputs_T>({
        mode: 'onChange',
        defaultValues: {
            one_read: false
        }
    })

    let submit = () => {
        handleSubmit(onSubmit)()
    }

    let [one_read, setOne_read] = useState(false)

    return <>
        <PageMainTemplate>

            {contextHolder}
            <div className={styles.container}>

                <h3 style={{ fontFamily: 'Montserrat', textAlign: 'center' }}>Создайте свой уникальный bin</h3>

                <NameField
                    disabled={isLoading}
                    errors={errors}
                    register={register}
                />

                <MuiTextField
                    disabled={isLoading}
                    errors={errors}
                    register={register}
                />

                <SwitchField
                    disabled={isLoading}
                    setOne_read={setOne_read}
                    register={register}
                />

                {!one_read && <SliderField
                    disabled={isLoading}
                    register={register}
                />}


                <Uploader
                    disabled={isLoading}
                    getValues={getValues}
                    register={register}
                    session_id={session_id}
                />

                {
                    (isLoading) ?
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />} />
                        :
                        <Button disabled={isLoading} onClick={() => {
                            trigger()
                            if (!isValid) return
                            setModalActive(true)
                        }}>Создать</Button>
                }

            </div>


            <CaptchaModal
                register={register}
                active={modalActive}
                setActive={setModalActive}
                submit={submit}
            />

        </PageMainTemplate>
    </>

}

export default MainPage