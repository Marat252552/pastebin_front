import Footer from "../../../../Widgets/Footer"
import Header from "../../../../Widgets/Header"
import LargeMaxFullWidthTemplate from "../../LargeMaxFullWidthTemplate"
import styles from './lib/styles.module.css'


const PageMainTemplate = ({ children }: { children: any }) => {
    return <>
        <div className={styles.container}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Header />
                <LargeMaxFullWidthTemplate>
                    
                        {children}
                    
                </LargeMaxFullWidthTemplate>

            </div>
            <Footer />
        </div>
    </>
}

export default PageMainTemplate