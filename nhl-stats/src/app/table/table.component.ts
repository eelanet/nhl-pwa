import { Component, OnInit } from "@angular/core";
import { StatsService } from "../stats.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  league;
  number = 0;
  names = [];
  ranks = [];
  points = [];
  teams = [];

  constructor(private stats: StatsService) {}

  ngOnInit() {
    this.getLeague();
  }

  getLeague() {
    this.stats.getLeagueTable().subscribe(res => {
      this.league = res;
      this.showTable();
    });
  }

  showTable() {
    this.league.records.forEach(element => {
      element.teamRecords.forEach(element => {
        this.teams.push(element);
        this.teams.forEach(element => {
          element.team.rank = this.number++;
        });
      });
    });
    this.sortByRank();
  }

  sortByRank() {
    this.teams.forEach(element => {
      this.ranks.push(element.leagueRank);
    });
    this.ranks = this.ranks.sort((a, b) => a - b);
    this.ranks.forEach(rank => {
      this.teams.forEach(element => {
        if (element.leagueRank === rank) {
          this.names.push(element.team.name);
          this.points.push(element.points);
        }
      });
    });
  }
}
