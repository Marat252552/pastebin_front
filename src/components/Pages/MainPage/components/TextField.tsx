import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"
import {useState} from 'react'


const TextField = ({ register, errors, disabled }: { register: any, errors: FieldErrors<Inputs_T>, disabled: boolean }) => {

    let [length, setLength] = useState<number>(0)

    let {name, onBlur, onChange, ref, required} = register('text', {
        required: 'Введите текст',
        maxLength: 200
    })

    return <>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            <CustomTextField
                name={name}
                onBlur={onBlur}
                ref={ref}
                disabled={disabled}
                required={required}
                onChange={e => {
                    setLength(e.target.value.length)
                    onChange(e)
                }}
                InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
                error={!!errors.text}
                id="outlined-multiline-flexible"
                multiline
                maxRows={6}
                label={errors.text?.message || 'Текст'}
            />
            <span style={{fontSize: '12px'}}>{length} из 200</span>
            {errors.text?.type === 'maxLength' && <span style={{ fontSize: '12px', color: 'red' }}>Не больше 200 символов</span>}
        </div>

    </>
}

export default TextField