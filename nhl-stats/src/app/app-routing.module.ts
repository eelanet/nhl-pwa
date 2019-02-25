import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamsComponent } from "./teams/teams.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  { path: "", redirectTo: "/teams", pathMatch: "full" },
  { path: "teams", component: TeamsComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
