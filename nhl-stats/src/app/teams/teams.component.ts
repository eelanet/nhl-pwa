import { Component, OnInit } from "@angular/core";

import { StatsService } from "../stats.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"]
})
export class TeamsComponent implements OnInit {
  title = "All teams";
  update = false;
  allTeams: any;
  teamNames = [];

  constructor(private stats: StatsService) {}

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