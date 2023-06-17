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
import TextField from "./components/TextField"
import Button from "./components/Button"
import styles from './lib/styles.module.css'
import { Spin, message } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import CaptchaModal from "./components/CaptchaModal"


const MainPage = () => {

    let [session_id] = useState(v4())
    let [loading, setLoading] = useState<boolean>(false)
    let [modalActive, setModalActive] = useState<boolean>(false)

    let navigate = useNavigate()
    const onSubmit = async (values: Inputs_T) => {
        setLoading(true)
        try {
            let response = await CreatePinAPI({ session_id, ...values })
            navigate('/completed/' + response.data.pin_id)
        } catch (e) {
            console.log(e)
            message.error('Ошибка создания. Попробуйте позже')
        } finally {
            setLoading(false)
        }
    }

    let { register, handleSubmit, formState: { errors, isValid }, getValues, trigger } = useForm<Inputs_T>({
        mode: 'onChange',
        defaultValues: {
            one_read: false,
            days_alive: 100
        }
    })

    let triggerSubmit = () => {
        handleSubmit(onSubmit)()
    }


    return <>
        <PageMainTemplate>

            <div className={styles.container}>

                <h3 style={{ fontFamily: 'Montserrat', textAlign: 'center' }}>Создайте свой уникальный bin</h3>

                <NameField
                    disabled={loading}
                    errors={errors}
                    register={register}
                />

                <TextField
                    disabled={loading}
                    errors={errors}
                    register={register}
                />

                <SwitchField
                    disabled={loading}
                    register={register}
                />

                <Uploader
                    disabled={loading}
                    getValues={getValues}
                    register={register}
                    session_id={session_id}
                />

                {
                    loading?
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />} />
                        :
                        <Button disabled={loading} onClick={() => {
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
                triggerSubmit={triggerSubmit}
            />

        </PageMainTemplate>
    </>

}

export default MainPage