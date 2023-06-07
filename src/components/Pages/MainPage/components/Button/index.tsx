import styles from './lib/styles.module.css'


const Button = ({children}: {children: any}) => {
    return <button className={styles.container}>{children}</button>
}

export default Button