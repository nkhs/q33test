import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FabDialogComponent } from "src/app/components/fab-dialog/fab-dialog.component";
import { tap } from "rxjs/operators";
import { ITodo, TodoStore } from "./todo.store";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor(private dialog: MatDialog, private store: TodoStore) {}

  ngOnInit(): void {
    this.store.loadTodos$();
  }

  public openDialog(todo?: ITodo): void {
    const dialogConfigs = {
      dialogPlaceholder: "Learn about NgRx component store",
      cancelBtnText: "Cancel",
      confirmBtnText: !todo ? "Add" : "Update",
      inputText: todo ? todo.text : null
    };
    const ref = this.dialog.open(FabDialogComponent, {
      data: {
        ...dialogConfigs
      }
    });
    ref
      .afterClosed()
      .pipe(
        tap((text: string) => {
          if (!text) return;
          else if (!todo) this.store.createTodo$(text);
          else this.store.updateTodos$({ ...todo, text });
        })
      )
      .subscribe();
  }

  public onDelete($event: ITodo) {
    this.store.deleteTodo$($event);
  }

  public onEdit($event: ITodo) {
    this.openDialog($event);
  }

  public onComplete($event: ITodo) {
    this.store.updateTodos$($event);
  }
}
