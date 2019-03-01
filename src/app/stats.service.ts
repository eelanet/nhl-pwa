import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StatsService {
  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get("https://statsapi.web.nhl.com/api/v1/teams");
  }

  getResults(date) {
    return this.http.get(
      "https://statsapi.web.nhl.com/api/v1/schedule?date=" + date
    );
  }

  getLeagueTable() {
    return this.http.get("https://statsapi.web.nhl.com/api/v1/standings");
  }
}
