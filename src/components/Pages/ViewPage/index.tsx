import { useParams } from 'react-router-dom'
import { Pin_T } from '../../Shared/types'
import { useState, useEffect } from 'react'
import GetPinAPI from '../../Api/GetPinApi'
import ImagesGallery from './components'
import LargeMaxFullWidthTemplate from '../../Shared/Templates/LargeMaxFullWidthTemplate'
import styles from './lib/styles.module.css'
import { Card, Result, Skeleton } from 'antd'
import PageMainTemplate from '../../Shared/Templates/Pages/MainTemplate'
import SkeletonInput from 'antd/es/skeleton/Input'
import SkeletonImage from 'antd/es/skeleton/Image'


const ViewPage = () => {
    let { pin_id } = useParams()

    let [pin, setPin] = useState<Pin_T | undefined>()

    let [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!pin_id) return
        let fetchPin = async () => {
            try {
                let response = await GetPinAPI({ pin_id: pin_id! })
                setPin(response.data.pin)
            } catch (e: any) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPin()
    }, [])


    return <PageMainTemplate>
        <LargeMaxFullWidthTemplate>
            <div className={styles.container}>
                {
                    (isLoading) ?
                        <>
                            <Card title={<p><SkeletonInput size='small' active /></p>}>
                                <p><Skeleton active /></p>
                            </Card>
                            <Card title={<p><SkeletonInput size='small' active /></p>}>
                                <p><SkeletonImage active /></p>
                            </Card>
                        </>
                        :
                        (!pin) ?
                            <Result
                                status="404"
                                title="404"
                                subTitle="Пин не найден или удален"
                            />
                            :
                            <>
                                <Card title={<p style={{ fontSize: '20px', fontFamily: 'Montserrat' }}>{pin?.title}</p>}>
                                    <p style={{ fontSize: '15px', fontFamily: 'Montserrat' }}>{pin?.text}</p>
                                </Card>
                                {pin?.images_names && <ImagesGallery images_names={pin.images_names} />}
                            </>
                }




            </div>


        </LargeMaxFullWidthTemplate>
    </PageMainTemplate>


}

export default ViewPage