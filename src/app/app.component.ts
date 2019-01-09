import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/reducers';
import { getLoading } from './store/selectors/post.selector';
import { GetAll } from './store/actions/post.actions';
import * as fromPost from './store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store:Store<AppState> ){
    this.Load$ = this.store.select(getLoading);
  }
  
  Load$: Observable<boolean>

  ngOnInit(){
    this.store.dispatch(new GetAll());
  }

  onLoad(){
    this.store.dispatch(new fromPost.GetAll());
  }

  
  
} 

