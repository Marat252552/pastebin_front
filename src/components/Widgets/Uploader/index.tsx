import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import uploadFile from './processes/UploadFile';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { Inputs_T } from '../../Pages/MainPage/lib/types';
import {useState} from 'react'
const { Dragger } = Upload;


const Uploader = ({ callInfoModal, register, session_id, getValues }: { callInfoModal: (text: string) => void, getValues: UseFormGetValues<Inputs_T>, register: UseFormRegister<Inputs_T>, session_id: string }) => {

    const { onChange, name } = register('files_UIDs')

    let [isFinished, setIsFinished] = useState(false)

    const props: UploadProps = {
        name: 'files_UIDs',
        multiple: true,
        maxCount: 5,
        onRemove: (e) => {
            let allFilesUIDs = [...getValues().files_UIDs]
            let newAllFilesUIDs = allFilesUIDs.filter(el => {
                return el !== e.uid
            })
            let data = {target: {value: newAllFilesUIDs, name}}
            onChange(data)
        },
        customRequest: (options) => { uploadFile(isFinished, setIsFinished, options, session_id, callInfoModal) },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                // console.log(info.file, info.fileList);
                console.log(info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} файл успешно загружен`);
                let UIDs = info.fileList.map(el => el.uid)
                let e = { target: { value: UIDs, name } }
                onChange(e)
            } else if (status === 'error') {
                message.error(`${info.file.name} ошибка загрузки`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return <>

        <Dragger {...props} accept='image/*'>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text" style={{fontSize: '20px', fontFamily: 'Montserrat'}}>Загрузите картинки (макс. 5)</p>
            <p className="ant-upload-hint">
                Коснитесь здесь или перетащите изображения в эту область
            </p>
            <p className="ant-upload-hint">
                (Необязательно)
            </p>
        </Dragger>
    </>
}


export default Uploader;