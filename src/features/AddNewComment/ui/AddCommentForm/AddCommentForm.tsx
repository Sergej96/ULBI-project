import { FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export type AddCommentFormProps = {
    className?: string;
    onSendComment: (text: string) => void
};

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

function AddCommentForm({ className, onSendComment }: AddCommentFormProps) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );
    const onFormCommentSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSendComment(text || '');
      onCommentTextChange('');
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <form className={classNames(cls.form, {}, [className])} onSubmit={onFormCommentSubmit}>
                <Input
                    className={cls.text}
                    placeholder={t('Введите текс комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button type="submit">{t('Отправить')}</Button>
            </form>
        </DynamicModuleLoader>
    );
}

export default AddCommentForm;
