import LargeMaxFullWidthTemplate from "../../Shared/Templates/LargeMaxFullWidthTemplate"
import styles from './lib/styles.module.css'


const Footer = () => {

    return <div className={styles.container}>
        <LargeMaxFullWidthTemplate>
            <div style={{padding: '10px'}}>
                Условия пользования
            </div>
        </LargeMaxFullWidthTemplate>
    </div>
}

export default Footer