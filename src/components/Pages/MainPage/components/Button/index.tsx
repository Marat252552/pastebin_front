import styles from './lib/styles.module.css'


const Button = ({children, onClick, disabled}: {children: any, onClick?: any, disabled: boolean}) => {
    return <button disabled={disabled} onClick={onClick} type='button' className={styles.container}>{children}</button>
}

export default Button