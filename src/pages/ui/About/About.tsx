import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutProps {}

const About: FC<AboutProps> = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            <h2>{t('title')}</h2>
        </div>
    );
};

export default About;
