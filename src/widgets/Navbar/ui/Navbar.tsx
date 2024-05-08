import { memo, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';
import Portal from 'shared/ui/Portal/Portal';
import { AuthModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

const Navbar = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const user = useSelector(getUserAuthData);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (user) {
        return (
            <div className={cls.navbar}>
                <div className={cls.links}>
                    <AppButton
                        className={cls.links}
                        theme={ButtonTheme.INVERTED_COLOR}
                        onClick={onLogout}
                    >
                        {t('logout')}
                    </AppButton>
                </div>
            </div>
        );
    }

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
                {isAuthModal && (
                    <AuthModal isOpen={isAuthModal} onClose={onClose} lazy />
                )}
            </Portal>
        </div>
    );
});

export default Navbar;
