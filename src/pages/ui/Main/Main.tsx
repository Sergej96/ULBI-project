import { Counter } from '../../../entities/Counter';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppButton from 'shared/ui/AppButton/AppButton';

function Main() {
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);
    const { t } = useTranslation('main');
    return (
        <div>
            <Counter />
            {t('title')}
            <AppButton onClick={() => setIsError(true)}>
                {t('btn_error')}
            </AppButton>
        </div>
    );
}

export default Main;
