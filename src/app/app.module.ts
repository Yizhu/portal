import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as $ from 'jquery';

import { UtilsService } from './service/utils.service';
import { CoreService } from './service/core.service';
import { SDKBrowserModule } from './service/sdk';

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
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    FooterComponent,
    SnackbarComponent,
    LoginFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [UtilsService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
