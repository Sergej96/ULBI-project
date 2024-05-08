import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';

interface ProfileProps {}

const reducers: ReducerList = {
    profile: profileReducer,
};

const Profile: FC<ProfileProps> = () => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {' '}
            <div>{t('PROFILE_PAGE')}</div>
        </DynamicModuleLoader>
    );
};

export default Profile;
