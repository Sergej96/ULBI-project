import { FC, useCallback, useState } from 'react';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Modal from 'shared/ui/Modal/Modal';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';
import Portal from 'shared/ui/Portal/Portal';
import { AuthModal } from 'features/AuthByUsername/ui/AuthModal/AuthModal';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={cls.navbar}>
            <div className={cls.links}>
                <AppButton
                    className={cls.links}
                    theme={ButtonTheme.INVERTED_COLOR}
                    onClick={onOpen}
                >
                    {t('login')}
                </AppButton>
            </div>

            <Portal>
                <AuthModal isOpen={isAuthModal} onClose={onClose} lazy />
            </Portal>
        </div>
    );
};

export default Navbar;
