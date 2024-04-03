import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { DisplayInputComponent } from './components/display-input/display-input.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HighlightComponent } from './components/highlight/highlight.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MinLengthComponent } from './components/min-length/min-length.component';
import { MinLengthDirective }  from './directives/min-length/minlength.directive';
import { AnimationComponent } from './components/animation/animation.component';
import { CustomAnimationDirective } from './directives/animation/animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataserviceComponent } from './components/dataservice/dataservice.component';


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
    TooltipDirective,
    TooltipComponent,
    MinLengthComponent,
    MinLengthDirective,
    AnimationComponent,
    CustomAnimationDirective,
    DataserviceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
