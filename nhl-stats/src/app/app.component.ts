import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  update = false;

  // Reloads page automatically if updates available
  constructor(updates: SwUpdate) {
    updates.available.subscribe(() => {
      this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
  }
}
