import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "fab",
  templateUrl: "./fab.component.html",
  styleUrls: ["./fab.component.css"]
})
export class FabComponent {
  @Output() fabEmitter = new EventEmitter();

  emitClick(): void {
    this.fabEmitter.emit();
  }
}
