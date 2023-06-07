import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"



const NameField = ({ register, errors }: { register: any, errors: FieldErrors<Inputs_T> }) => {

    return <>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            <CustomTextField
                {...register('title', {
                    required: 'Введите название',
                    maxLength: 20
                })}
                InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
                error={!!errors.title}
                id="standard-required"
                variant='standard'
                label={errors.title?.message || 'Название'}
            />
            {errors.title?.type === 'maxLength' && <span style={{ fontSize: '12px', color: 'red' }}>Не больше 20 символов</span>}
        </div>

    </>
}

export default NameField