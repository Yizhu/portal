import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component'
import { DocumentationComponent } from './documentation/documentation.component';
import { LoginComponent } from './login/login.component';
import { IntergrationsComponent } from './intergrations/intergrations.component';
import { ContactComponent } from './contact/contact.component';
import { RegistryAgentidComponent } from './registry-agentid/registry-agentid.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'documentation', component:  DocumentationComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'registry_agentid', component:  RegistryAgentidComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'intergrations', component:  IntergrationsComponent},
  { path: 'contact', component:  ContactComponent},
  { path: '**', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
