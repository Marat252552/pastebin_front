import { InputNumber, Slider } from "antd";
import { useState } from 'react'
import { Inputs_T } from "../../../../lib/types"; 
import { UseFormRegister } from "react-hook-form";


const SliderField = ({ register, disabled }: { register: UseFormRegister<Inputs_T>, disabled: boolean }) => {

    let { onChange, name } = register('days_alive')

    const [inputValue, setInputValue] = useState(100);

    const onChangeHandler = (newValue: number) => {
        setInputValue(newValue);
        let newE = { target: { value: newValue, name } }
        onChange(newE)
    };

    return (<div style={{ display: 'flex', width: '100%' }}>
        <span>Сколько дней будет доступен пин?</span>
        <div style={{ width: '100%' }}>
            <Slider
                disabled={disabled}
                min={1}
                max={100}
                onChange={onChangeHandler}
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
        </div>

        <InputNumber
            disabled={disabled}
            min={1}
            max={100}
            style={{ margin: '0 16px' }}
            value={typeof inputValue === 'number' ? inputValue : 0}
            onChange={(e) => { onChangeHandler(e!) }}
        />

    </div>

    );
};

export default SliderField