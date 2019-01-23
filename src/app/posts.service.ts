import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')

    //This should auto convert to an object from JSON as a feature in HttpClient, but I'm keeping the reference for older versions where we would need to change how we make requests and use pipe/map or whatever

      // .pipe(map(res => res.json()))
      //can't seem to get res.json to work with pipe
      // .map(res => res.json());
      // map(n => n * n)
  }
  
}

