import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    const { t } = useTranslation('not_found');

    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default NotFound;
