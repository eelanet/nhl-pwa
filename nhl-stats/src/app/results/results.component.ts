import { Component, OnInit } from "@angular/core";

import { StatsService } from "../stats.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  games: any;
  date = "";
  dates;
  results;
  awayTeamName = [];
  homeTeamName = [];

  constructor(private stats: StatsService) {}

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.stats.getResults().subscribe(res => {
      this.games = res;
      this.showDate();
    });
  }

  showDate() {
    this.dates = this.games.dates[0];
    this.date = this.games.dates[0].date;
    this.showResults();
  }

  showResults() {
    this.dates.games.forEach(element => {
      this.awayTeamName.push(element.teams.away.team.name);
      this.homeTeamName.push(element.teams.home.team.name);
    });
  }
}
