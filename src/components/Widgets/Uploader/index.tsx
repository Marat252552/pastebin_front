import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { Inputs_T } from '../../Pages/MainPage/lib/types';
import ReturnUploadprops from './elements/ReturnUploadprops';
const { Dragger } = Upload;


const Uploader = ({ register, session_id, getValues }: { getValues: UseFormGetValues<Inputs_T>, register: UseFormRegister<Inputs_T>, session_id: string }) => {

    const props = ReturnUploadprops(session_id, getValues, register)

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