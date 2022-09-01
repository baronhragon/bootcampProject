import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HomePreparingComponent } from './home-preparing/home-preparing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HomeReadyComponent } from './home-ready/home-ready.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomeComponent,
    RegisterComponent,
    HomePreparingComponent,
    HomeReadyComponent,
    HomeHistoryComponent,
    MenuComponent,
  ],
  imports: [
    AppRoutingModule,
    GooglePlaceModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
