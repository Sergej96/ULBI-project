/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable i18next/no-literal-string */
import React, { FC, useCallback, useEffect } from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen = false, onClose }) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const { theme } = useTheme();

    const onCloseHandler = useCallback(
        (event: React.MouseEvent) => {
            if (
                onClose
                && (event.target as Element).classList.contains(cls.overlay)
            ) {
                onClose();
            }
        },
        [onClose]
    );
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' && onClose) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return (
        <Portal>
            <div className={classNames(cls.modal, mods)}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={classNames(cls.content, {}, [cls[theme]])}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
