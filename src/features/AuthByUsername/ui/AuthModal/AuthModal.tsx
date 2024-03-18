import { FC, useEffect, useState } from 'react';
import cls from './AuthModal.module.scss';
import Modal from 'shared/ui/Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose, lazy }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true);
        }
    }, [isMounted, isOpen]);

    if (lazy && !isMounted) return null;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <AuthForm />
        </Modal>
    );
};
