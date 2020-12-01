import React from 'react';
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
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=index.d.ts.map