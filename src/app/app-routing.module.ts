import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', pathMatch:"full", redirectTo: 'home', title: 'Home' },
  { path:'home', component: HomeComponent, title: 'Home' },
  { path:'contact', component: ContactComponent, title: 'Contact' },
  { path:'about', component: AboutComponent, title: 'About' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
