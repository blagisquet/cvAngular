import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { CompetencesComponent } from './competences/competences.component';
import { TestComponent} from './test/test.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'cv', component: CvComponent },
  {path: 'compétences', component: CompetencesComponent },
  {path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    CompetencesComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
