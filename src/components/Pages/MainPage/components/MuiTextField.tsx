import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"



const MuiTextField = ({ register, errors }: { register: any, errors: FieldErrors<Inputs_T> }) => {

    return <>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            <CustomTextField
                {...register('text', {
                    required: 'Введите текст',
                    maxLength: 200
                })}
                InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
                error={!!errors.text}
                id="outlined-multiline-flexible"
                multiline
                maxRows={6}
                label={errors.text?.message || 'Текст'}
            />
            {errors.text?.type === 'maxLength' && <span style={{ fontSize: '12px', color: 'red' }}>Не больше 200 символов</span>}
        </div>

    </>
}

export default MuiTextField