import { Modal } from 'antd';
import { useState } from 'react'



const ModalWindow = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    return <>
        <div>
            <span style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', fontFamily: 'Montserrat' }} onClick={showModal}>Не понял</span>
        </div>
        <Modal style={{fontFamily: 'Montserrat'}} title="Кажется..." open={isModalOpen} cancelText='Нет' onOk={handleOk} >
            <p >Вы просто дэон</p>
        </Modal>
    </>
}

export default ModalWindow