import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TwoBarsComponent } from './twobars.component';
import { OneBarComponent } from './onebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoBarsComponent,
    OneBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
