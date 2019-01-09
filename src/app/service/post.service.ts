import { Injectable } from "@angular/core";
import { posts } from "../models/post.models";
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PostService{
    url:string;
    postArray:posts[];
    // params = new HttpParams()
    //     .set('?_limit','15')
    //     .set('_page', '{n}');
    constructor(private http: HttpClient){
        this.url= 'https://jsonplaceholder.typicode.com/posts';
    }

    getAll(){
        return this.http.get<posts[]>(this.url);
    }

}