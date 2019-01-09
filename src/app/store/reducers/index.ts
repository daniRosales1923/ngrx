import * as fromPost from './post.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    post: fromPost.PostState
}

export const reducers: ActionReducerMap<AppState> = {
    post: fromPost.reducer
}