import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import uploadFile from './processes/UploadFile';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Inputs_T } from '../../Pages/MainPage/lib/types';

const { Dragger } = Upload;





const Uploader = ({ register, session_id }: { register: UseFormRegister<Inputs_T>, session_id: string }) => {

    const { onChange, name } = register('files_UIDs')

    const props: UploadProps = {
        name: 'files_UIDs',
        multiple: true,
        customRequest: (options) => { uploadFile(options, session_id) },
        onRemove: (e) => {
            console.log(e)
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                let UIDs = info.fileList.map(el => el.uid)
                let e = { target: { value: UIDs, name } }
                onChange(e)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
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
            <p className="ant-upload-text">Загрузите картинки</p>
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