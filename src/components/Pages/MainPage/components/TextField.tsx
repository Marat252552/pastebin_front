import TextArea from "antd/es/input/TextArea"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../lib/types"



const TextField = ({ register, errors }: { register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T> }) => {

    const { name, onChange } = register('text', {
        maxLength: 200,
        required: true
    })

    return <div>
        {<p style={{ color: (errors.text?.type === 'maxLength') ? "red" : 'transparent', fontSize: '14px' }}>Не больше 200 символов</p>}
        <TextArea
            status={(errors.text) ? 'error' : undefined}
            placeholder="Текст"
            onChange={e => {
                let newE = { target: { value: e.target.value, name } }
                onChange(newE)
            }}
        />
    </div>
}

export default TextField