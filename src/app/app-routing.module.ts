import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { OnOptionSelectComponent } from './components/on-option-select/on-option-select.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { Javascript404PageComponent } from './components/javascript404-page/javascript404-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'formarray',component:FormarrayComponent},
  {path:'optionselect',component:OnOptionSelectComponent},
  {path:'formone',component:FormOneComponent},
  {path:'post-api',component:PostApiComponent},
  {path:'crud',component:CrudComponent},
  {path:'not-available',component:Javascript404PageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
