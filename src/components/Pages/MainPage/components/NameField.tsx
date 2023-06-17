import { FieldErrors, UseFormRegister } from "react-hook-form"
import CustomTextField from "../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"
import {useState} from 'react'

let MaxLengthAlert = () => (
    <span style={{ fontSize: '12px', color: 'red' }}>Не больше 20 символов</span>
)

const NameField = ({ register, errors, disabled }: { register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T>, disabled: boolean }) => {

    let [length, setLength] = useState<number>(0)

    let {name, onBlur, onChange, ref, required} = register('title', {
        required: 'Введите название',
        maxLength: 20
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
                error={!!errors.title}
                id="standard-required"
                variant='standard'
                label={errors.title?.message || 'Название'}
            />
            <span style={{fontSize: '12px'}}>{length} из 20</span>
            {errors.title?.type === 'maxLength' && <MaxLengthAlert />}
        </div>

    </>
}

export default NameField