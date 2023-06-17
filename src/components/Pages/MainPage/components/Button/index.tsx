import styles from './lib/styles.module.css'


const Button = ({children, onClick}: {children: any, onClick?: any}) => {
    return <button onClick={onClick} type='button' className={styles.container}>{children}</button>
}

export default Button