import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { OnOptionSelectComponent } from './components/on-option-select/on-option-select.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { CrudComponent } from './components/crud/crud.component';
import { Javascript404PageComponent } from './components/javascript404-page/javascript404-page.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchFilterPipe } from './components/search-filter/searchfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FormarrayComponent,
    OnOptionSelectComponent,
    FormOneComponent,
    FormTwoComponent,
    PostApiComponent,
    CrudComponent,
    Javascript404PageComponent,
    SearchFilterComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
