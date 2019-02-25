import { Component, OnInit } from "@angular/core";

import { StatsService } from "../stats.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  games: any;
  games2: any;
  gamesToday = 0;
  gamesYesterday = 0;
  date = "";
  date2 = "";
  dates;
  dates2;
  results;
  results2;
  teams = [];
  teams2 = [];
  today;
  yesterday;

  constructor(private stats: StatsService) {}

  ngOnInit() {
    this.getToday();
    this.getYesterday();
    this.getResultsToday();
    this.getResultsYesterday();
  }

  getToday() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const today = yyyy + "-" + mm + "-" + dd;
    this.today = today;
  }

  getYesterday() {
    const date = new Date();
    const dd = date.getDate() - 1;
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const yesterday = yyyy + "-" + mm + "-" + dd;
    this.yesterday = yesterday;
  }

  getResultsToday() {
    this.stats.getResults(this.today).subscribe(res => {
      this.games = res;
      this.showDate();
    });
  }

  getResultsYesterday() {
    this.stats.getResults(this.yesterday).subscribe(res => {
      this.games2 = res;
      this.showDateYesterday();
    });
  }

  showDate() {
    this.dates = this.games.dates[0];
    this.date = this.dates.date;
    this.gamesToday = this.games.totalItems;
    this.showResults();
  }

  showDateYesterday() {
    this.dates2 = this.games2.dates[0];
    this.date2 = this.dates2.date;
    this.gamesYesterday = this.games2.totalItems;
    this.showResultsYesterday();
  }

  showResults() {
    this.dates.games.forEach(element => {
      this.teams.push(element.teams);
    });
  }

  showResultsYesterday() {
    this.dates2.games.forEach(element => {
      this.teams2.push(element.teams);
    });
  }
}
