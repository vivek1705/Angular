import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ListComponent } from './components/list/list.component';
import { DisplayInputComponent } from './components/display-input/display-input.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HighlightComponent } from './components/highlight/highlight.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: 'list', component: ListComponent },
  { path: 'display-input', component: DisplayInputComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'highlight', component: HighlightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
