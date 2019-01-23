import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BackArrowComponent } from './back-arrow/back-arrow.component';
import { BlogComponent } from './blog/blog.component';
import { SelectedBlogComponent } from './selected-blog/selected-blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzValidationModule } from 'ngx-materialize'
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TitleComponent,
    AboutMeComponent,
    BackArrowComponent,
    BlogComponent,
    SelectedBlogComponent,
    PortfolioComponent,
    ContactComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    ReactiveFormsModule,
    GalleryModule.forRoot(),
    BrowserAnimationsModule
    

  ],
  providers: [PostsService], //Need to declare as provider to get this to work I believe
  bootstrap: [AppComponent]
})
export class AppModule { }
