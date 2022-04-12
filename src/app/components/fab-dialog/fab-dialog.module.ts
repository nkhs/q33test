import { NgModule } from "@angular/core";
import { FabDialogComponent } from "./fab-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [FabDialogComponent],
  exports: [FabDialogComponent],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class FabDialogModule {}
