import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamsComponent } from "./teams/teams.component";
import { ResultsComponent } from "./results/results.component";
import { TableComponent } from "./table/table.component";
import { TeamInfoComponent } from './team-info/team-info.component';

const routes: Routes = [
  { path: "", redirectTo: "/teams", pathMatch: "full" },
  { path: "teams", component: TeamsComponent },
  { path: "team/:id", component: TeamInfoComponent },
  { path: "results", component: ResultsComponent },
  { path: "table", component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
