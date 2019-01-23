import { Component, OnInit, Renderer2 } from '@angular/core';
import { BlogService } from '../blog.service';
//Using Activated Route to get the params from our route



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs;
  blogstest;
  //declaring blogs property, we'll be more specific about this later

  constructor(private renderer: Renderer2, private service: BlogService) {
    this.renderer.setStyle(document.body, 'background-color', 'pink');
    //Using the renderer. I wonder what else this can do... 
  }

  getBlogs() {
    this.service.getBlogsData().subscribe((data) => {
      console.log(data);
      this.blogs = data;
    })
  }


  //
  ngOnInit() {
    this.getBlogs();
    // this.service.getBlogs();
    // this.service.getBlogsData()

  }
}


