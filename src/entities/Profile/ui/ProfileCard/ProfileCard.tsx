import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { useTranslation } from 'react-i18next';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';
import Input from 'shared/ui/Input/Input';

interface ProfileCardProps {}

export const ProfileCard: FC<ProfileCardProps> = () => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={cls.ProfileCard}>
            <div className={cls.header}>
                <h3>{t('title_profile')}</h3>
                <AppButton theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t('edit')}</AppButton>
            </div>
            <div className={cls.content}>
                <Input
                    value={data?.first}
                    placeholder={t('name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
