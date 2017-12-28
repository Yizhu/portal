import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LoginComponent } from './login/login.component';
import { IntergrationsComponent } from './intergrations/intergrations.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { RegistryAgentidComponent } from './registry-agentid/registry-agentid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { LogoComponent } from './shared/logo/logo.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    DocumentationComponent,
    LoginComponent,
    IntergrationsComponent,
    ContactComponent,
    BlogComponent,
    RegistryAgentidComponent,
    DashboardComponent,
    MenuBarComponent,
    LogoComponent,
    LoginButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
