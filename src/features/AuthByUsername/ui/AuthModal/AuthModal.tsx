import { FC, Suspense, useEffect, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import { AuthFormAsync } from '../AuthForm/AuthForm.async';
import Loader from 'shared/ui/Loader/Loader';

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
            <Suspense fallback={<Loader />}>
                <AuthFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
