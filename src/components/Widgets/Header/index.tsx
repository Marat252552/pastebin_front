import { Button } from "antd"
import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import styles from './lib/styles.module.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    let navigate = useNavigate()

    return <div className={styles.container}>
        <LargeMaxFullWidthTemplate>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Button onClick={() => { navigate('/#/create') }} type='text' className={styles.button}>СОЗДАТЬ УНИКАЛЬНЫЙ ПИН</Button>
            </div>

        </LargeMaxFullWidthTemplate>
    </div>
}

export default Header