import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { MidComponent } from './mid/mid.component';
import { FooterComponent } from './footer/footer.component';
import { ListproductComponent } from './listproduct/listproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightComponent,
    LeftComponent,
    MidComponent,
    FooterComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
