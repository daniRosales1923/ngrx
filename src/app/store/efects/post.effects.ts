import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { Action } from '@ngrx/store';
import { PostService } from '../../service/post.service';
import * as fromPost from '../actions/post.actions';
import { catchError, map, mergeMap, tap, mapTo } from 'rxjs/operators';
@Injectable()
export class PostEffects{

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(fromPost.AuthActionTypes.GetAll),
        mergeMap(token => this.postService.getAll().pipe(
            map(user => new fromPost.GetSuccess(user)),
            catchError(()=> of(new fromPost.GetError({redirect: '/'})))
        ))
    )

    constructor(
        private postService: PostService,
        private actions$: Actions
    ){}

}