import { NgModule } from "@angular/core";
import { FabComponent } from "./fab.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [FabComponent],
  exports: [FabComponent],
  imports: [MatButtonModule, MatIconModule]
})
export class FabModule {}
