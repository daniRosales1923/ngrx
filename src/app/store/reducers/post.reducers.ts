import { posts } from "src/app/models/post.models";
import * as fromPost from '../actions/post.actions';

export interface PostState{
    loading: boolean;
    posts: posts[];
    error: any;
}

const InialState: PostState = {//estado inicial
    loading: false,
    posts: null,
    error: null
};

//exportar funcion el reducer con sus casos
export function reducer(
    state: PostState = InialState, 
    action: fromPost.AuthActionsUnion ) : PostState {
    switch(action.type){
        case fromPost.AuthActionTypes.GetAll:{
            return {
                ...state,
                loading: true
            };
        }
        case fromPost.AuthActionTypes.Get_All_SUCCESS:{
            return{
                ...state,
                loading: true,
                posts: action.payload
            };
        }
        case fromPost.AuthActionTypes.Get_All_ERROR:{
            return{
                ...state,
                loading: false,
                error:action.payload
            };
        }
        default: {
            return state;
        }
    }
}
