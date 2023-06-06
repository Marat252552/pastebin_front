import { Button } from "antd"
import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import styles from './lib/styles.module.css'
import {useNavigate} from 'react-router-dom'


const Header = () => {

    let navigate = useNavigate()

    return <LargeMaxFullWidthTemplate>
        <div className={styles.container}>
            <Button onClick={() => {navigate('/create')}} type='text' className={styles.button}>Создать уникальный bin</Button>
        </div>
    </LargeMaxFullWidthTemplate>
}

export default Header