import { UploadProps, message } from 'antd';
import uploadFile from '../processes/UploadFile';
import { Inputs_T } from '../../../Pages/MainPage/lib/types';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';

const ReturnUploadprops = (session_id: string, getValues: UseFormGetValues<Inputs_T>, register: UseFormRegister<Inputs_T>) => {

    const { onChange, name } = register('files_UIDs')

    const props: UploadProps = {
        name: 'files_UIDs',
        multiple: true,
        maxCount: 5,
        onRemove: (e) => {
            let allFilesUIDs = [...getValues().files_UIDs]
            let newAllFilesUIDs = allFilesUIDs.filter(el => {
                return el !== e.uid
            })
            let data = { target: { value: newAllFilesUIDs, name } }
            onChange(data)
        },
        customRequest: (options) => { uploadFile(options, session_id) },
        onChange(info) {
            const { status, error } = info.file;
            
            if (status === 'done') {
                message.success(`${info.file.name} файл успешно загружен`);
                let UIDs = info.fileList.map(el => el.uid)
                let e = { target: { value: UIDs, name } }
                onChange(e)
            } else if (status === 'error') {
                if(!error) return message.error(`${info.file.name} ошибка загрузки`);
                if(error.status) return message.error('Размер файла превышает 4 МБ')
            }
        }
    }
    return props
}

export default ReturnUploadprops