import TextArea from "antd/es/input/TextArea"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../../lib/types"
import styles from './lib/styles.module.css'


const TextField = ({ register, errors }: { register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T> }) => {

    const { name, onChange } = register('text', {
        maxLength: 200,
        required: true
    })

    return <div className={styles.container}>
        {<p style={{ color: (errors.text?.type === 'maxLength') ? "red" : 'transparent', fontSize: '14px' }}>Не больше 200 символов</p>}
        <TextArea
            status={(errors.text) ? 'error' : undefined}
            style={{fontSize: '20px', fontFamily: 'Montserrat'}}
            placeholder="Текст"
            onChange={e => {
                let newE = { target: { value: e.target.value, name } }
                onChange(newE)
            }}
        />
    </div>
}

export default TextField