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
  gamesYesterday: number = 0;
  gamesToday: number = 0;
  dates: any;
  dates2: any;
  results: any;
  results2: any;
  teams = [];
  teams2 = [];
  today: any;
  yesterday: any;
  dateUs: any;
  dateFin: any;

  constructor(private stats: StatsService) { }

  ngOnInit() {
    this.utcTime();
    this.getToday();
    this.getYesterday();
    this.getResultsToday();
    this.getResultsYesterday();
  }

  utcTime() {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();
    let fullDate = yyyy + "-" + mm + "-" + dd;
    this.dateFin = fullDate;

    const timeUs = 7 * 60;
    date.setMinutes(date.getMinutes() - timeUs);
    dd = date.getDate();
    mm = date.getMonth() + 1; //January is 0!
    yyyy = date.getFullYear();
    fullDate = yyyy + "-" + mm + "-" + dd;
    this.dateUs = fullDate;
  }

  getToday() {
    this.today = this.dateUs;
  }

  getYesterday() {
    const date = new Date();
    // 7h + 24h = 31h
    const timeUs = 31 * 60;
    date.setMinutes(date.getMinutes() - timeUs);
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    const yesterday = yyyy + "-" + mm + "-" + dd;
    this.yesterday = yesterday;
  }

  getResultsToday() {
    this.stats.getResults(this.today).subscribe(res => {
      this.games = res;
      this.showDateToday();
    });
  }

  getResultsYesterday() {
    this.stats.getResults(this.yesterday).subscribe(res => {
      this.games2 = res;
      this.showDateYesterday();
    });
  }

  showDateToday() {
    this.dates = this.games.dates[0];
    this.gamesToday = this.games.totalItems;
    this.showResultsToday();
  }

  showDateYesterday() {
    this.dates2 = this.games2.dates[0];
    this.gamesYesterday = this.games2.totalItems;
    this.showResultsYesterday();
  }

  showResultsToday() {
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
