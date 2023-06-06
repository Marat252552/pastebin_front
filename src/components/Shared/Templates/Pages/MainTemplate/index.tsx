import Footer from "../../../../Widgets/Footer"
import Header from "../../../../Widgets/Header"
import styles from './lib/styles.module.css'


const PageMainTemplate = ({ children }: { children: any }) => {
    return <>
        <div className={styles.container}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Header />
                <div style={{ padding: '30px' }}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default PageMainTemplate