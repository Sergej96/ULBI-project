import { FC } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {}

const PageLoader:FC<PageLoaderProps> = () => (
    <div className={cls.pageLoader}>
        <Loader />
    </div>
);

export default PageLoader;
