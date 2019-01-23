import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//this used to be in rxjs/observable now it's just in rxjs. WHY DO THEY KEEP CHANGING THIS SHIT!

interface IBlogs {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})


export class BlogService {
  
  

  constructor(private http: HttpClient) { }

  getBlogs() {

    return [
      {
        id: 545435435
      },
      {
        id: 767327211
      },
      {
        id: 329810210
      }

    ]
  }

  // Get all blogs from the API
  getBlogsData() {
    return this.http.get<IBlogs[]>('/api/posts')
  }

  // Get all blogs from the API. Might add an interface later (shrug)
  getBlogsParams(param) {
    return this.http.get(`/api/posts/${param}`)
  }

}
