import { Card } from "antd";
import { Pin_T } from "../Shared/types";



const MainInfoCard = ({pin}: {pin: Pin_T}) => (
    <Card title={<p style={{ fontSize: '20px', fontFamily: 'Montserrat' }}>{pin?.title}</p>}>
        <p style={{ fontSize: '15px', fontFamily: 'Montserrat' }}>{pin?.text}</p>
    </Card>
)

export default MainInfoCard