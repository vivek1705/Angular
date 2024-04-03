import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ListComponent } from './components/list/list.component';
import { DisplayInputComponent } from './components/display-input/display-input.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MinLengthComponent } from './components/min-length/min-length.component';
import { AnimationComponent } from './components/animation/animation.component';
import { DataserviceComponent } from "./components/dataservice/dataservice.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: 'list', component: ListComponent },
  { path: 'display-input', component: DisplayInputComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'highlight', component: HighlightComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'min-length', component: MinLengthComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'dataservices', component: DataserviceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
