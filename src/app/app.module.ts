import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { AppRoutingModule } from './routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   AppRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
