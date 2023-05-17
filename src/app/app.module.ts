import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { KleeneModuleComponent } from './components/kleene-module/kleene-module.component';
import { BackgroundComponent } from './components/background/background.component';
import { OplenguagesmoduleComponent } from './components/oplenguagesmodule/oplenguagesmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    BackgroundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
