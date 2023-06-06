import styles from './lib/styles.module.css'


const LargeMaxFullWidthTemplate = ({ children }: { children: any }) => {
    return <div className={styles.mainContainer}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
}

export default LargeMaxFullWidthTemplate