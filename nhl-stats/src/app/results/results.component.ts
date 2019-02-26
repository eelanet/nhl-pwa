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
  gamesTomorrow = 0;
  gamesToday = 0;
  date = "";
  date2 = "";
  dates;
  dates2;
  results;
  results2;
  teams = [];
  teams2 = [];
  today;
  tomorrow;

  constructor(private stats: StatsService) {}

  ngOnInit() {
    this.getTomorrow();
    this.getToday();
    this.getResultsTomorrow();
    this.getResultsToday();
  }

  getTomorrow() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const tomorrow = yyyy + "-" + mm + "-" + dd;
    this.tomorrow = tomorrow;
  }

  getToday() {
    const date = new Date();
    const dd = date.getDate() - 1;
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const today = yyyy + "-" + mm + "-" + dd;
    this.today = today;
  }

  getResultsTomorrow() {
    this.stats.getResults(this.tomorrow).subscribe(res => {
      this.games = res;
      this.showDate();
    });
  }

  getResultsToday() {
    this.stats.getResults(this.today).subscribe(res => {
      this.games2 = res;
      this.showDateToday();
    });
  }

  showDate() {
    const date = new Date();
    const dd = date.getDate() + 1;
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const tomorrow = yyyy + "-" + mm + "-" + dd;
    this.date = tomorrow;
    this.dates = this.games.dates[0];
    this.gamesTomorrow = this.games.totalItems;
    this.showResults();
  }

  showDateToday() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const today = yyyy + "-" + mm + "-" + dd;
    this.date2 = today;
    this.dates2 = this.games2.dates[0];
    this.gamesToday = this.games2.totalItems;
    this.showResultsToday();
  }

  showResults() {
    this.dates.games.forEach(element => {
      this.teams.push(element.teams);
    });
  }

  showResultsToday() {
    this.dates2.games.forEach(element => {
      this.teams2.push(element.teams);
    });
  }
}
