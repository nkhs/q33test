import { NgModule } from "@angular/core";
import { FabModule } from "src/app/components/fab/fab.module";
import { DateModule } from "src/app/components/date/date.module";
import { ListModule } from "src/app/components/list/list.module";
import { TodoComponent } from "./todo.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FabDialogModule } from "src/app/components/fab-dialog/fab-dialog.module";
import { TodoDataService } from "./todo-data.service";
import { TodoStore } from "./todo.store";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  providers: [TodoDataService, TodoStore],
  imports: [
    ListModule,
    FabModule,
    DateModule,
    FabDialogModule,
    MatDialogModule,
    CommonModule
  ]
})
export class TodoModule {}
