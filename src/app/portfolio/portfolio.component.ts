// import { Component, OnInit, Renderer2 } from '@angular/core';
// import {
//   AccessibilityConfig,
//   Action,
//   ButtonEvent,
//   ButtonsConfig,
//   ButtonsStrategy,
//   ButtonType,
//   Description,
//   DescriptionStrategy,
//   DotsConfig,
//   GalleryService,
//   Image,
//   ImageModalEvent,
//   KS_DEFAULT_BTN_CLOSE,
//   KS_DEFAULT_BTN_DELETE,
//   KS_DEFAULT_BTN_DOWNLOAD,
//   KS_DEFAULT_BTN_EXTURL,
//   KS_DEFAULT_BTN_FULL_SCREEN,
//   PreviewConfig,
//   LoadingConfig,
//   LoadingType,
//   CurrentImageConfig
// } from '@ks89/angular-modal-gallery';

// @Component({
//   selector: 'app-portfolio',
//   templateUrl: './portfolio.component.html',
//   styleUrls: ['./portfolio.component.css']
// })
// export class PortfolioComponent implements OnInit {

//   images: Image[] = [
//     new Image(
//       0,
//       { // modal
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
//         extUrl: 'http://www.google.com'
//       }
//     ),
//     new Image(
//       1,
//       { // modal
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
//         description: 'Description 2'
//       }
//     ),
//     new Image(
//       2,
//       { // modal
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
//         description: 'Description 3',
//         extUrl: 'http://www.google.com'
//       },
//       { // plain
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
//         title: 'custom title 2',
//         alt: 'custom alt 2',
//         ariaLabel: 'arial label 2'
//       }
//     ),
//     new Image(
//       3,
//       { // modal
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
//         description: 'Description 4',
//         extUrl: 'http://www.google.com'
//       }
//     ),
//     new Image(
//       4,
//       { // modal
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
//       },
//       { // plain
//         img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
//       }
//     )
//   ];

//   // array of images (obviously with different id) where paths are the same.
//   // to prevent caching issues I have to append '?index'.
//   sameImages: Image[] = [
//     new Image(0, {
//       img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg?1',
//       extUrl: 'http://www.google.com'
//     }),
//     new Image(1, {
//       img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg?2',
//       extUrl: 'http://www.google.com'
//     }),
//     new Image(2, {
//       img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg?3',
//       extUrl: 'http://www.google.com'
//     }),
//   ];

//   constructor(private renderer: Renderer2) {
//     this.renderer.setStyle(document.body, 'background-color', 'tan');
//     //Using the renderer. I wonder what else this can do...
//   }



//   ngOnInit() {

//   }

// }


import { Component, Renderer2 } from '@angular/core';
import {Image, GalleryService,} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  galleryId = 1;
  imageIndex = 1;
  
  constructor(private renderer: Renderer2, private galleryService: GalleryService) {
    this.renderer.setStyle(document.body, 'background-color', 'tan');
    //Using the renderer. I wonder what else this can do...
  }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }
  
  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
        description: 'Description 2'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
        description: 'Description 4',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
      }
    )
  ];

 

  
}

