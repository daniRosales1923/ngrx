import { Component, OnInit } from "@angular/core";
import { Store, select} from '@ngrx/store';
import * as fromPost from '../store/reducers';
import { AuthActionTypes, GetAll } from "../store/actions/post.actions";
import { AppState } from "../store/reducers";
import { getLoading } from "../store/selectors/post.selector";
import { Observable } from "rxjs";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']

})

export class PostComponent  {
    

}