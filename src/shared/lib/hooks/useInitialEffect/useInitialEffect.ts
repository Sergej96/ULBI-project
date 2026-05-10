import { useEffect } from 'react';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export const useInitialEffect = (cb: Function) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
