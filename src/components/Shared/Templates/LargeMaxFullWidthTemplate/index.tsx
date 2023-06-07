import styles from './lib/styles.module.css'


const LargeMaxFullWidthTemplate = ({ children }: { children: any }) => {
    return <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div style={{ padding: '10px', width: '100%' }}>
                {children}
            </div>
        </div>
    </div>
}

export default LargeMaxFullWidthTemplate