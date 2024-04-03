import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { DisplayInputComponent } from './components/display-input/display-input.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { HighlightComponent } from './components/highlight/highlight.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    DisplayInputComponent,
    DashboardComponent,
    ListComponent,
    HomeComponent,
    HighlightDirective,
    HighlightComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
