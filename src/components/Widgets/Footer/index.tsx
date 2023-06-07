import { useNavigate } from "react-router-dom"
import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import styles from './lib/styles.module.css'


const Footer = () => {

    let navigate = useNavigate()

    return <div className={styles.container}>
        <LargeMaxFullWidthTemplate>
            <div style={{padding: '10px', display: 'flex', justifyContent: 'space-around'}}>
                Условия пользования
                <span style={{cursor: 'pointer'}} onClick={() => {navigate('/info')}}>Что такое pastebin?</span>
            </div>
        </LargeMaxFullWidthTemplate>
    </div>
}

export default Footer