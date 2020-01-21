import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { mdbModule } from "./mdb.module";
import { ToastModule } from "ng-uikit-pro-standard";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { DataService } from "./shared/services/data.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    mdbModule.forRoot(),
    ToastModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "Your_api_key"
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
