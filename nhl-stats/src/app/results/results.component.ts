import { Component, OnInit } from "@angular/core";

import { StatsService } from "../stats.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  games: any;
  gamesToday = 0;
  date = "";
  dates;
  results;
  awayTeams = [];
  homeTeams = [];

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
    this.date = this.dates.date;
    this.gamesToday = this.games.totalItems;
    this.showResults();
  }

  showResults() {
    this.dates.games.forEach(element => {
      // this.awayTeams.push(element.teams.away);
      this.homeTeams.push(element.teams);
    });
  }
}
