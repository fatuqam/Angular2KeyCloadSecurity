import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from './shared/service/keycloak.http';
import { KeycloakService } from './shared/service/keycloak.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [KEYCLOAK_HTTP_PROVIDER,KeycloakService],
  bootstrap: [AppComponent]
})
export class AppModule { }
