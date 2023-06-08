import { useParams } from "react-router-dom"
import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"
import ClipboardLink from "../../UI/ClipboardLink"
import { Result } from "antd"
import { SmileOutlined } from "@ant-design/icons"


const CompletedPinPage = () => {

    let front_url = import.meta.env.VITE_FRONTEND_URL

    let { pin_id } = useParams()

    let link = front_url + '/#/view/' + pin_id

    return <>
        <PageMainTemplate>

            <Result
                icon={<SmileOutlined />}
                title="Пин готов!"
            />
            <h4 style={{ textAlign: 'center' }}>Поделитесь ссылкой на него</h4>
            <ClipboardLink value={link} />

        </PageMainTemplate>
    </>
}

export default CompletedPinPage