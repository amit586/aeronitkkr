import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResourcesComponent } from './resources/resources.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'members',component: MembersComponent },
  {path:'gallery',component: GalleryComponent},
  {path:'events', component: EventsComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'resources',component: ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
