import { FieldErrors, UseFormRegister } from "react-hook-form";

export type Inputs_T = {
    files_UIDs: string[],
    text: string,
    title: string,
    one_read: boolean,
    days_alive?: number,
    captcha: string
}

export type TextField_T = ({ register, errors, disabled }: {
    register: any;
    errors: FieldErrors<Inputs_T>;
    disabled: boolean;
}) => JSX.Element

export type NameField_T = ({ register, errors, disabled }: {
    register: UseFormRegister<Inputs_T>;
    errors: FieldErrors<Inputs_T>;
    disabled: boolean;
}) => JSX.Element

export type TitleField_T = ({ register, errors }: {
    register: UseFormRegister<Inputs_T>;
    errors: FieldErrors<Inputs_T>;
}) => JSX.Element

export type CaptchaModal_T = ({ register, active, setActive, triggerSubmit }: {
    triggerSubmit: () => void;
    register: UseFormRegister<Inputs_T>;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element

export type SwitchField_T = ({ register, disabled }: {
    register: UseFormRegister<Inputs_T>;
    disabled: boolean;
}) => JSX.Element