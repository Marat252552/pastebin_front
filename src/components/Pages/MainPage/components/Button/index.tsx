import styles from './lib/styles.module.css'

type Props_T = { children: any, onClick?: any, disabled: boolean }

const Button = ({ children, onClick, disabled }: Props_T) => (
    <button
        disabled={disabled}
        onClick={onClick}
        type='button'
        className={styles.container}>
        {children}
    </button>
)


export default Button