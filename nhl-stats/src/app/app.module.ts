import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { HttpClientModule } from "@angular/common/http";
import { StatsService } from "./stats.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import { NavbarComponent } from "./navbar/navbar.component";
import { TeamsComponent } from './teams/teams.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TeamsComponent, ResultsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
