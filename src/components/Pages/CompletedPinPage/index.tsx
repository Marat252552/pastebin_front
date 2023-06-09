import { useParams } from "react-router-dom"
import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"
import ClipboardLink from "../../UI/ClipboardLink"
import { Result } from "antd"
import { SmileOutlined } from "@ant-design/icons"


const CompletedPinPage = () => {

    let origin = window.location.origin

    let { pin_id } = useParams()

    let link = origin + '/#/view/' + pin_id

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