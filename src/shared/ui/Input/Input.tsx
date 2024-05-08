import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    autoFocus?: boolean;
}

const Input = memo(
    ({
        className,
        value,
        onChange,
        placeholder,
        label,
        autoFocus,
    }: InputProps) => {
        const inputRef = useRef(null);
        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event.target.value);
        };

        useEffect(() => {
            if (autoFocus) {
                inputRef.current?.focus();
            }
        }, [autoFocus]);

        return (
            <label className={cls.inputWrapper} htmlFor={label}>
                {placeholder && `${placeholder}>`}
                <input
                    ref={inputRef}
                    id={label}
                    className={classNames(cls.input, {}, [className])}
                    value={value}
                    onChange={handleOnChange}
                />
            </label>
        );
    },
);

export default memo(Input);
