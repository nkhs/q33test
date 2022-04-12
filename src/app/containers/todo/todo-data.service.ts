import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./todo.store";
import * as mockTodos from "./todo.json";

@Injectable()
export class TodoDataService {
  // We aren't really modifying a db/file. Just return the same todo as if the  CRUD ops were successful

  // No id? return all todos
  getTodo(id?: string): Observable<Array<ITodo>> {
    return id
      ? of(mockTodos.find((todo: ITodo) => todo.id === id))
      : of(mockTodos);
  }

  createTodo(todo: ITodo["text"]): Observable<ITodo> {
    return of({ id: uuidv4(), text: todo, complete: false });
  }

  updateTodo(todo: ITodo): Observable<ITodo> {
    return of(todo);
  }

  deleteTodo(todo: ITodo): Observable<ITodo> {
    return of(todo);
  }
}
