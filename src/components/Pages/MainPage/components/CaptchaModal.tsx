import Modal from '../../../Shared/Modal'
import ReCAPTCHA from 'react-google-recaptcha'
import { CaptchaModal_T } from '../lib/types'

const CaptchaModal: CaptchaModal_T = ({ register, active, setActive, triggerSubmit }) => {

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