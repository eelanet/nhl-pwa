import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamsComponent } from "./teams/teams.component";
import { ResultsComponent } from "./results/results.component";
import { GamesComponent } from "./games/games.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  { path: "", redirectTo: "/results", pathMatch: "full" },
  { path: "teams", component: TeamsComponent },
  { path: "results", component: ResultsComponent },
  { path: "table", component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
