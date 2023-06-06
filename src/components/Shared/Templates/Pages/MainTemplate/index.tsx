import Footer from "../../../../Widgets/Footer"
import Header from "../../../../Widgets/Header"
import styles from './lib/styles.module.css'


const PageMainTemplate = ({ children }: { children: any }) => {
    return <>
        <div className={styles.container}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid 1px red'}}>
                <Header />
                <div style={{ padding: '30px', width: '100%' }}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default PageMainTemplate