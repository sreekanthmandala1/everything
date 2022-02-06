import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollintoviewComponent } from './components/scrollintoview/scrollintoview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BootstrapMediaQueriesComponent } from './components/bootstrap-media-queries/bootstrap-media-queries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FormarrayComponent,
    ScrollintoviewComponent,
    NavbarComponent,
    BootstrapMediaQueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
