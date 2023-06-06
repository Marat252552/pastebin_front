import { useParams } from 'react-router-dom'
import { Pin_T } from '../../Shared/types'
import { useState, useEffect } from 'react'
import GetPinAPI from '../../Api/GetPinApi'
import ImagesGallery from './components'
import LargeMaxFullWidthTemplate from '../../Shared/Templates/LargeMaxFullWidthTemplate'
import styles from './lib/styles.module.css'
import { Card } from 'antd'
import NotFoundPage from '../NotFoundPage'
import PageMainTemplate from '../../Shared/Templates/Pages/MainTemplate'


const ViewPage = () => {
    let { pin_id } = useParams()

    let [pin, setPin] = useState<Pin_T | undefined>()

    useEffect(() => {
        if (!pin_id) return
        let fetchPin = async () => {
            try {
                let response = await GetPinAPI({ pin_id: pin_id! })
                setPin(response.data.pin)
            } catch (e: any) {
                console.log(e)
            }
        }
        fetchPin()
    }, [])

    if (!pin) {
        return <NotFoundPage />
    }

    return <PageMainTemplate>
        <LargeMaxFullWidthTemplate>
            <div className={styles.container}>
                <Card  title={<p style={{fontSize: '20px', fontFamily: 'Montserrat'}}>{pin?.title}</p>}>
                    <p style={{fontSize: '15px', fontFamily: 'Montserrat'}}>{pin?.text}</p>
                </Card>

                {pin?.images_names && <ImagesGallery images_names={pin.images_names} />}

            </div>


        </LargeMaxFullWidthTemplate>
    </PageMainTemplate>


}

export default ViewPage