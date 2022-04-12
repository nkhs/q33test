import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "src/app/containers/todo/todo.store";

@Component({
  selector: "list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  @Input() items: Array<string>;
  @Output() completionEmitter = new EventEmitter();
  @Output() deletionEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();

  emitCompletion(item: ITodo) {
    this.completionEmitter.emit({ ...item, complete: !item.complete });
  }

  emitDeletion(item: ITodo) {
    this.deletionEmitter.emit(item);
  }

  emitEdit(item: ITodo) {
    this.editEmitter.emit(item);
  }
}
