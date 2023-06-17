import styles from './lib/styles.module.css'


const Modal = ({ active, setActive, children }: { children: any, active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    if (!active) return
    return (
        <div
            onClick={() => { setActive(false) }}
            className={active ? `${styles.container} ${styles.active}` : styles.container}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Modal