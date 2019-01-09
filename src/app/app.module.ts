import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PostComponent } from './Post/post.component';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/efects/post.effects';
import { NavbarModule } from './Components/nav-bar/navbar.module';
import { HomeModule } from './view/home/home.view.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
      EffectsModule.forRoot([PostEffects]),
      NavbarModule,
      HomeModule,
      BsDropdownModule.forRoot()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
