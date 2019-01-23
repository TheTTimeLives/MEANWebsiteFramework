import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: '<p> home works! </p>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //I'm waiting to refactor everything like this because I feel like there might be a better structure to rigging this through the app
  title = "Taylor Melnik";

  onTitleChange() {
    console.log("This is just a handler for output events. We aren't using it for anything but we might later. Maybe for user changes?")
  }

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'yellow');
    //Using the renderer. I wonder what else this can do...
  }

  ngOnInit() {
  }

}
