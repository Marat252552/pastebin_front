import Footer from "../../../../Widgets/Footer"
import Header from "../../../../Widgets/Header"
import LargeMaxFullWidthTemplate from "../../LargeMaxFullWidthTemplate"
import styles from './lib/styles.module.css'


const PageMainTemplate = ({ children }: { children: any }) => {
    return <>
        <div className={styles.container}>
            <div className={styles.header_body_container}>
                <Header />
                <LargeMaxFullWidthTemplate>
                    <div className={styles.children_container}>
                        {children}
                    </div>
                </LargeMaxFullWidthTemplate>
            </div>
            <Footer />
        </div>
    </>
}

export default PageMainTemplate