import PageMainTemplate from "../../Shared/Templates/Pages/MainTemplate"
import styles from './lib/styles.module.css'


const InfoPage = () => {
    return <PageMainTemplate>
        <div className={styles.container}>
            <h1 style={{textAlign: 'center'}}>Что такое PASTEBIN?</h1>
            <p className={styles.text}>Pastebin позволяет загружать отрывки текста  для возможности просмотра окружающими</p>
            <p className={styles.text}>Достаточно лишь создать беслатную ссылку и передать ее любым другим пользователям</p>
        </div>

    </PageMainTemplate>
}

export default InfoPage