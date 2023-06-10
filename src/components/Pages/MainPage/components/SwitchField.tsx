import { Switch } from "antd"
import { UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../lib/types"


const SwitchField = ({register, setOne_read}: {setOne_read: React.Dispatch<React.SetStateAction<boolean>>, register: UseFormRegister<Inputs_T>}) => {

    let {name, onChange} = register('one_read')

    return <div style={{ display: 'flex', gap: '10px', fontSize: '15px' }}>
        <span>Удалить после первого прочтения?</span>
        <Switch checkedChildren='Да' unCheckedChildren="Нет" onChange={(value) => {
            setOne_read(value)
            let newE = {target: {value, name}}
            onChange(newE)
        }} />
    </div>
}

export default SwitchField