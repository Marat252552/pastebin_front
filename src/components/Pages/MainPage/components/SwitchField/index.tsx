import { Switch } from "antd"
import { UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../../lib/types"
import { useState } from "react"
import SliderField from "./elements/SliderField"


const SwitchField = ({ register, disabled }: { register: UseFormRegister<Inputs_T>, disabled: boolean }) => {

    let { name, onChange } = register('one_read')
    let [one_read, setOne_read] = useState(false)

    return <>
        <div style={{ display: 'flex', gap: '10px', fontSize: '15px' }}>
            <span>Удалить после первого прочтения?</span>
            <Switch checkedChildren='Да' disabled={disabled} unCheckedChildren="Нет" onChange={(value) => {
                setOne_read(value)
                let newE = { target: { value, name } }
                onChange(newE)
            }} />
        </div>
        {!one_read && <SliderField
            disabled={disabled}
            register={register}
        />}
    </>

}

export default SwitchField