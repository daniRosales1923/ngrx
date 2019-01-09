import {createSelector,createFeatureSelector} from '@ngrx/store';
import {PostState} from '../reducers/post.reducers'

const postState = createFeatureSelector<PostState> ('post');

export const getLoading = createSelector(
    postState,
    state => state ? state.loading : false 
);



// export const selectAllPost = (state:)=>state.post{

// }