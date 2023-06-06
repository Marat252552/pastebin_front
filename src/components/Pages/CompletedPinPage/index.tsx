import { useParams } from "react-router-dom"
import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"
import { front_url } from "../../../config/env"
import ClipboardLink from "../../UI/ClipboardLink"
import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"



const CompletedPinPage = () => {

    let { pin_id } = useParams()

    let link = front_url + '/view/' + pin_id

    return <>
        <PageMainTemplate>
            <LargeMaxFullWidthTemplate>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px'}}>
                    <h1 style={{ textAlign: 'center' }}>Пин готов! Поделитесь ссылкой на него</h1>
                    <ClipboardLink value={link} />
                </div>

            </LargeMaxFullWidthTemplate>

        </PageMainTemplate>
    </>
}

export default CompletedPinPage