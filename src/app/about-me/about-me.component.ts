import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'orange');
    //Using the renderer. I wonder what else this can do...
  }

  ngOnInit() {
  }

}
