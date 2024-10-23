import { ButtonHTMLAttributes, ReactNode, memo, useCallback, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import CopyIcon from '../../assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string;
    children: string;
}

export const Code = memo(({ className, children }: CodeProps) => {
    const codeRef = useRef<HTMLDivElement | null>(null);
    const onCopy = useCallback(() => {
        if (codeRef.current?.textContent) {
            navigator.clipboard.writeText(codeRef.current.textContent);
        }
    }, []);
    return (
        <pre className={classNames(cls.root, {}, [className])}>
            <Button className={cls.copyBtn} square onClick={onCopy} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
            <code ref={codeRef}>{children}</code>
        </pre>
    );
});
