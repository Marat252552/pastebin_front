import Modal from '../../../Shared/Modal'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Inputs_T } from '../lib/types'
import { UseFormRegister } from 'react-hook-form'

const CaptchaModal = ({ register, active, setActive, triggerSubmit }: { triggerSubmit: () => void, register: UseFormRegister<Inputs_T>, active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { onChange, name } = register('captcha')

    return <Modal active={active} setActive={setActive}>
        <ReCAPTCHA
            sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
            onChange={(value) => {
                let newE = { target: { value, name } }
                onChange(newE)
                triggerSubmit()
            }}
        />
    </Modal>
}

export default CaptchaModal