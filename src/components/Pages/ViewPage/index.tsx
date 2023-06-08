import { useParams } from 'react-router-dom'
import { Pin_T } from '../../Shared/types'
import { useState, useEffect } from 'react'
import GetPinAPI from '../../Api/GetPinApi'
import ImagesGallery from './components/ImagesGallery'
import PageMainTemplate from '../../Shared/Templates/Pages/MainTemplate'
import Skeletons from './components/Skeletons'
import NotFoundError from './components/NotFoundEror'
import OneReadAlert from './components/OneReadAlert'
import MainInfoCard from '../../Entities/MainInfoCard'


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
        {
            (isLoading) ?
                <Skeletons />
                :
                (!pin) ?
                    <NotFoundError />
                    :
                    <>
                        {pin.one_read && <OneReadAlert />}
                        <MainInfoCard pin={pin} />
                        {pin?.images && pin.images[0] && <ImagesGallery images={pin.images} />}
                    </>
        }

    </PageMainTemplate>
}

export default ViewPage