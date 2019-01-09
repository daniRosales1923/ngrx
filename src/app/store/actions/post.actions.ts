import {Action} from '@ngrx/store';
import { posts } from 'src/app/models/post.models';

export enum AuthActionTypes{
    GetAll = '[posts] Login',
    Get_All_SUCCESS = '[posts] Login Success',
    Get_All_ERROR = '[posts] Login Error',
}

export class GetAll implements Action{
    readonly type = AuthActionTypes.GetAll
}

export class GetSuccess implements Action{
    readonly type = AuthActionTypes.Get_All_SUCCESS

    constructor(public payload:  posts[]){}
}

export class GetError implements Action{
    readonly type = AuthActionTypes.Get_All_ERROR

    constructor(public payload: any){}
}


export type AuthActionsUnion =
    GetAll      |
    GetSuccess  | 
    GetError 