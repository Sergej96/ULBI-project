import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, dispatch, getState } = thunkAPI;
    const article = getArticleDetailsData(getState());
    const userData = getUserAuthData(getState());

    if (!text || !article || !userData) {
      return thunkAPI.rejectWithValue('error data');
    }

    try {
      const response = await extra.api.post<Comment>('comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
