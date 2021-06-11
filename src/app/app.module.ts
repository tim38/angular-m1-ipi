import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceModule } from './experience/experience.module';
import { FormationModule } from './formation/formation.module';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    ExperienceModule,
    FormationModule
  ],
  providers: [ StudentsModule], //,ExperienceModule,FormationModule
  bootstrap: [AppComponent]
})
export class AppModule { }
