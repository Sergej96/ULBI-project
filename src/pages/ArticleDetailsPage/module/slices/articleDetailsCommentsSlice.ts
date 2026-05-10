import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticlesComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommnetsSlice = createSlice({
  name: 'articleDetailsCommnets',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
   }).addCase(
fetchCommentsByArticleId.fulfilled,
    (
      state,
      action: PayloadAction<Comment[]>,
    ) => {
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    },
).addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const {
  reducer: articleDetailsCommentsReducer,
  actions: articleDetailsCommentsActions,
 } = articleDetailsCommnetsSlice;
