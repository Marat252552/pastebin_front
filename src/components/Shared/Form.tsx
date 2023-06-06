import { useForm } from "react-hook-form"
import UploadImageAPI from "../Api/UploadImageAPI"

type Inputs_T = {
    file: any,
    text: string
}

const Form = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })

    const onSubmit = async (values: Inputs_T) => {
        let formData = new FormData()
        formData.append('file', values.file[0])
        console.log(values.file[0])
        await UploadImageAPI(formData)
        reset()
    }

    return <div>

        <form onSubmit={handleSubmit(onSubmit)}>

            {errors.file && <div>Загрузите файл</div>}

            <input
                {...register('file', { required: true })}
                accept="image/*"
                type="file"
            />

            <input
                {...register('text', { required: true })}
            />


            <button type="submit">Submit</button>

        </form>

    </div>
}

export default Form