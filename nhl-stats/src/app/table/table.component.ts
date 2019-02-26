import { Component, OnInit } from "@angular/core";
import { StatsService } from "../stats.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  league;
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
      });
    });
    this.sortByRank();
  }

  sortByRank() {
    this.teams.forEach(element => {
      this.ranks.push(element.leagueRank);
    });
    // Sorts ranks array from 1 to 31
    this.ranks = this.ranks.sort((a, b) => a - b);
    this.ranks.forEach(rank => {
      this.teams.forEach(element => {
        // If rank is teams league rank -> update names and points array
        if (element.leagueRank === rank) {
          this.names.push(element.team.name);
          this.points.push(element.points);
        }
      });
    });
  }
}
