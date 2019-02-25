import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

import { StatsService } from "./stats.service";
import { getLocaleDayNames } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "NHL live stats";
  update = false;
  allTeams: any;
  teamNames = [];

  constructor(updates: SwUpdate, private stats: StatsService) {
    updates.available.subscribe(event => {
      this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.stats.getTeams().subscribe(res => {
      this.allTeams = res;
      this.getNames();
    });
  }

  getNames() {
    this.allTeams.teams.forEach(element => {
      this.teamNames.push(element.name);
    });
    console.log(this.teamNames);
  }
}
