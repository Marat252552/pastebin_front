import { Result } from "antd"
import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"



const NotFoundPage = () => {

    return <>
        <PageMainTemplate>
            <LargeMaxFullWidthTemplate>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px' }}>


                    <Result
                        status="404"
                        title="404"
                        subTitle="Пин не найден или удален"
                    />

                </div>

            </LargeMaxFullWidthTemplate>
        </PageMainTemplate>
    </>

}

export default NotFoundPage