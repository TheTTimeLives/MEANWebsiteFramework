import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  //Is this really the cleanest way of doing this? Also I aliased the decorator with the same name just so I remember how to do it. Remember, Aliasing is good because it removes a breakpoint in your code when you have to rename things (the logic side renaming won't break the layout side) :(
  @Input('title') title: string;
  @Input() subheader: string;
  @Input() comment: string;
  //for the custom change callback we aren't using yet
  @Output() change = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
