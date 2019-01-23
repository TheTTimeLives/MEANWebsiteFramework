import { Component, Renderer2 } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
//Using renderer to change bg style across whole body

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    // This is a slide

  //   trigger('routeAnimation', [
  //     transition('1 => 2', [
  //       style({height: '!'}),
  //       query(':enter', style ({transform: 'translateX(100%'})),
  //       query(':enter, :leave', style ({position: 'absolute', top: 0, left: 0, right: 0 })),
  //       group([
  //         query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(-100%)'}))]),
  //         query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(100%)'}))])
  //       ])

  //     ]),
  //     transition('2 => 1', [
  //       style({height: '!'}),
  //       query(':enter', style ({transform: 'translateX(-100%'})),
  //       query(':enter, :leave', style ({position: 'absolute', top: 0, left: 0, right: 0 })),
  //       group([
  //         query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(100%)'}))]),
  //         query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(-100%)'}))])
  //       ])

  //     ])
  //   ]),
    

  // ]

  // This is a pop in
  
  // trigger('routeAnimation', [
  //   transition('1 => 2', [
  //     style({height: '!'}),
  //     query(':enter', style ({transition: 'opacity .5s ease-in'})),
  //     query(':enter, :leave', style ({position: 'absolute', top: 0, left: 0, right: 0 })),
  //     group([
  //       query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transition: 'opacity .5s ease-out'}))]),
  //       query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transition: 'opacity .5s ease-in'}))])
  //     ])

  //   ]),
  //   transition('2 => 1', [
  //     style({height: '!'}),
  //     query(':enter', style ({transition: 'opacity .5s ease-out'})),
  //     query(':enter, :leave', style ({position: 'absolute', top: 0, left: 0, right: 0 })),
  //     group([
  //       query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transition: 'opacity .5s ease-in'}))]),
  //       query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transition: 'opacity .5s ease-out'}))])
  //     ])

  //   ])
  // ]),

  //this is a fade

  //trigger based on the route animation and give it an array of things I want it to do when this transition occurs
  trigger('routeAnimation', [
    // we add a transition to trigger when we move from state 1 to state 2
    transition('1 => 2', [
      // set height of the component equal to it's end value
      style({height: '!'}),
      // take your element and it's children at the beginning of the animation and transition
      query(':enter', style ({opacity: 100})),
      // style both routes so that they will always take the full page
      query(':enter, :leave', style ({position: 'absolute', top: 0, left: 0, right: 0 })),
      group([
        //group this allows us to do two animations at the same time

        // the component that is leaving the scene and do this
        query(':leave', [animate(300, style({opacity: 0}))]),
        query(':enter', [animate(300, style({opacity: 100}))])
      ])

    ]),
    transition('2 => 1', [
      style({height: '!'}),
      query(':enter', style ({opacity: 100})),
      query(':enter, :leave', style ({position: 'absolute', top: 0, left: 0, right: 0 })),
      group([
        query(':leave', [animate(300, style({opacity: 0}))]),
        query(':enter', [animate(300, style({opacity: 100}))])
      ])

    ])
  ]),
  

]
})


export class AppComponent {
  title = 'WebsiteFramework';

  getDepth(outlet){
    return outlet.activatedRouteData['depth'];

  }

  
  
}


