import React from 'react'
import OutsideClick from "@alphasquad/outside-click";

interface InputProps {
    placeholder: string;
    type: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    onChange: (value: string | number) => void;
    value?: any;
    setShow: (text: boolean) => void;
}
const Input: React.FC<InputProps> = ({ placeholder, type, onChange, required, minLength, maxLength, value, setShow }) => {
    const setShowMain = () => {
        setShow(false);
    }

    return (
        <div>
            <OutsideClick onClose={setShowMain}>
                {value ? <input className="myInput"
                    type={type} placeholder={placeholder} onChange={(event) => onChange(event.target.value)}
                    required={required || false} minLength={minLength || 2} maxLength={maxLength || 200} value={value}
                /> : <input className="myInput"
                    type={type} placeholder={placeholder} onChange={(event) => onChange(event.target.value)}
                    required={required || false} minLength={minLength || 2} maxLength={maxLength || 200}
                    />}
            </OutsideClick>

            <style>{`
            .myInput{
                height: 30px;
                width: 100%;
                padding: 3px;
                font-size: 16px;

            }
        `}</style>
        </div>
    );
}

export default Input;