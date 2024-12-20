import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UpdateComponent } from './update/update.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
 {path:'home',component:HomeComponent},

 {path:'body',component:BodyComponent},
  {path:'saveBook',component:CreateComponent},
  {path:'fetch',component:FetchComponent},
  {path:'abtus',component:AboutusComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactusComponent},
  {path:'update/:id',component:UpdateComponent},
 {path:'',redirectTo:'body',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
