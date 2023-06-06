import { Input } from "antd"
import { Inputs_T } from "../lib/types"
import { FieldErrors, UseFormRegister } from "react-hook-form"


const TitleField = ({ register, errors }: { register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T> }) => {

    let { name, onChange } = register('title', {
        maxLength: 20,
        required: true
    })

    return <div style={{display: 'flex', flexDirection: 'column'}}>

        {<p style={{color: (errors.title?.type === 'maxLength')? "red" : 'transparent', fontSize: '14px'}}>Не больше 20 символов</p>}
        
        <Input
            status={(errors.title) ? 'error' : undefined}
            style={{fontSize: '20px', fontFamily: 'Montserrat'}}
            placeholder='Название'
            onChange={e => {
                let newE = { target: { value: e.target.value, name } }
                onChange(newE)
            }}
        />
    </div>

}

export default TitleField