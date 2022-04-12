import { NgModule } from "@angular/core";
import { ListComponent } from "./list.component";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [MatCardModule, CommonModule, MatIconModule]
})
export class ListModule {}
