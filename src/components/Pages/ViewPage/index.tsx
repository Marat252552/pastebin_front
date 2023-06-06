import { useParams } from 'react-router-dom'
import { Pin_T } from '../../Shared/types'
import { useState, useEffect } from 'react'
import GetPinAPI from '../../Api/GetPinApi'
import { backend_url } from '../../../config/env'
import ImagesGallery from './components'
import LargeMaxFullWidthTemplate from '../../Shared/Templates/LargeMaxFullWidthTemplate'
import Header from '../../Widgets/Header'
import styles from './lib/styles.module.css'
import { Card } from 'antd'


const ViewPage = () => {
    let { pin_id } = useParams()

    let [pin, setPin] = useState<Pin_T | undefined>()

    useEffect(() => {
        if (!pin_id) return
        let fetchPin = async () => {
            try {
                let response = await GetPinAPI({ pin_id: pin_id! })
                setPin(response.data.pin)
            } catch (e) {
                console.log(e)
            }
        }
        fetchPin()
    }, [])

    return <LargeMaxFullWidthTemplate>
        <div className={styles.container}>
            <Header />
            <Card title={pin?.title}>
                <p>{pin?.text}</p>
            </Card>



            {pin?.images_names && <ImagesGallery images_names={pin.images_names} />}

        </div>


    </LargeMaxFullWidthTemplate>

}

export default ViewPage