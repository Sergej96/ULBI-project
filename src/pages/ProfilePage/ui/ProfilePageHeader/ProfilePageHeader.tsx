import { FC, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('title')} />
            {readonly ? (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    {t('edit')}
                </Button>
            ) : (
                <>
                    <Button className={cls.saveEdit} onClick={onSave} theme={ButtonTheme.OUTLINE}>
                        {t('save')}
                    </Button>
                    <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
                        {t('cancel')}
                    </Button>
                </>
            )}
        </div>
    );
};
