import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
} from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfileProps {}

const reducers: ReducerList = {
    profile: profileReducer,
};

const Profile: FC<ProfileProps> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {' '}
            <div>{t('PROFILE_PAGE')}</div>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default Profile;
