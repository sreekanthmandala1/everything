import { ScrollintoviewComponent } from './components/scrollintoview/scrollintoview.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { BootstrapMediaQueriesComponent } from './components/bootstrap-media-queries/bootstrap-media-queries.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'formarray',component:FormarrayComponent},
  {path:'scrollintoview', component:ScrollintoviewComponent},
  {path:'bootstrapmediaqueries', component:BootstrapMediaQueriesComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
