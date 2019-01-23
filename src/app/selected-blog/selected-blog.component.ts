import { Component, OnInit , Renderer2} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-selected-blog',
  templateUrl: './selected-blog.component.html',
  styleUrls: ['./selected-blog.component.css']
})
export class SelectedBlogComponent implements OnInit {

  blog;
  id;
  name;
  date;
  image;
  title;
  content;

  //I dunno what other content they're gonna want in this

  //we'll declare this in another component file later when we settle on an optimal shape

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private service: BlogService) {
    this.renderer.setStyle(document.body, 'background-color', 'green');


    this.route.paramMap
      .subscribe(params => {
        //This is effectively your callback from your observable that you use for your routes
        //Params is this observable with methods on it that allow you to do stuff. The + is a new js thing that converts strings to numbers, since these by default come back as strings
        let id = +params.get('id')
        let image = '../../assets/blogimages/cas_lackey.PNG';
        this.image = image;

        this.id = id;
        //Yea so this is how you grab params from your routes

        //We can use this data when we fetch from our db ... maybe we should set that up sooner then later ... actually lets make an object we'll build with our response from the db that we can test stuff

        //HARD CODED STUFF WE WILL SWAP WITH OUR BACKEND DATA MAYBE WITH HTTP CLIENT STUFF

        this.name = 'Some dingus';
        this.date = 'May 13 1992';
        this.title = 'My first blog!';
        this.content = 'Hey yall! This is my first blog on this new platform and I thought I would let all you guys know what I was up to! I have been studying like crazy lately trying to get this job in C#.'
      })
   }

   getSelectedBlogs() {
    this.service.getBlogsParams(this.id).subscribe((data) => {
      console.log(data);
      this.blog = data;

      // this.blogs = data;
    })
  }

  ngOnInit() {
    this.getSelectedBlogs();
  }

}
