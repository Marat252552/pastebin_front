import { Modal } from 'antd';
import { useState } from 'react'

type CallModalF_T = (value: string) => void

const ModalWindow = ({ callInfo, callSuccess }: { callInfo: CallModalF_T, callSuccess: CallModalF_T }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        callSuccess('Признание записано в базу данных')
    };
    return <>
        <div>
            <span style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', fontFamily: 'Montserrat' }} onClick={showModal}>Не понял</span>
        </div>
        <Modal
            style={{ fontFamily: 'Montserrat' }}
            title="Кажется..."
            open={isModalOpen}
            cancelText='Нет'
            onCancel={() => callInfo('Просто дэон')}
            onOk={handleOk}
        >
            <p >Вы просто дэон</p>
        </Modal>
    </>
}

export default ModalWindow