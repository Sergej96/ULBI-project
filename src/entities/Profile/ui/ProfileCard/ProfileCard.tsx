import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className,
    data,
    error,
    isLoading,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly,
}) => {
    const { t } = useTranslation();

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('error')}
                    text={error}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt={t('avatar')} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    onChange={onChangeFirstname}
                    placeholder={t('firstName')}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    placeholder={t('lastName')}
                    readOnly={readonly}
                />
                <Input
                    value={String(data?.age)}
                    onChange={onChangeAge}
                    placeholder={t('age')}
                    readOnly={readonly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    onChange={onChangeCity}
                    placeholder={t('city')}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    onChange={onChangeUsername}
                    placeholder={t('username')}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    placeholder={t('avatar')}
                    readOnly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
