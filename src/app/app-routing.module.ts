import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {AboutMeComponent} from '../app/about-me/about-me.component';
import {BlogComponent} from '../app/blog/blog.component';
import {SelectedBlogComponent} from '../app/selected-blog/selected-blog.component';
import {PortfolioComponent} from '../app/portfolio/portfolio.component';
import {ContactComponent} from '../app/contact/contact.component';
import {PostsComponent} from '../app/posts/posts.component';

//Your routes and what component will be rendered
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {depth: 1} },
  { path: 'about', component: AboutMeComponent, data: {depth: 2}  },
  { path: 'blog/:id', component: SelectedBlogComponent },
  { path: 'blog', component: BlogComponent, data: {depth: 2} },
  { path: 'portfolio', component: PortfolioComponent, data: {depth: 2} },
  { path: 'contact', component: ContactComponent, data: {depth: 2} },
  {path: 'posts',component: PostsComponent, data: {depth: 2}},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


