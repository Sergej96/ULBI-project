import { FC, useCallback, useState } from 'react';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Modal from 'shared/ui/Modal/Modal';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={cls.navbar}>
            <div className={cls.links}>
                <AppButton
                    className={cls.links}
                    theme={ButtonTheme.CLEAR}
                    onClick={onToggleModal}
                >
                    {t('login')}
                </AppButton>
            </div>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                123
            </Modal>
        </div>
    );
};

export default Navbar;
