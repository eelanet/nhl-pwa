import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from '../stats.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  team: any;
  teamInfo: any;
  roster: [];

  constructor(
    private route: ActivatedRoute,
    private stats: StatsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam() {
    const id = this.route.snapshot.paramMap.get('id');
    id.toString();
    console.log(id);
    this.stats.getTeam(id).subscribe(team => {
      this.team = team;
      this.showTeamInfo();
    });
  }

  showTeamInfo() {
    this.teamInfo = this.team.teams[0];
    this.getRoster();
  }

  getRoster() {
    this.roster = this.teamInfo.roster.roster;
  }

  goBack() {
    this.location.back();
  }

}
