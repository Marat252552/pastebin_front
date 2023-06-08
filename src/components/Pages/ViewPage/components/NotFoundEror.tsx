import { Result } from "antd"



const NotFoundError = () => (
    <Result
        status="404"
        title="404"
        subTitle="Пин не найден или удален"
    />
)

export default NotFoundError