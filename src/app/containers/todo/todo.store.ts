import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { TodoDataService } from "./todo-data.service";
import { catchError, tap, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

export interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

const INITIAL_STATE = {
  todos: []
};

@Injectable()
export class TodoStore extends ComponentStore<any> {
  constructor(private dataService: TodoDataService) {
    super(INITIAL_STATE);
  }

  // SELECTORS
  readonly getTodos = this.select(({ todos }) => todos);

  // UPDATERS
  readonly setTodos = this.updater((state, todos: Array<ITodo>) => {
    return { ...state, todos };
  });

  readonly addTodo = this.updater((state, todo: ITodo) => {
    return { ...state, ...{ todos: [...state.todos, todo] } };
  });

  readonly updateTodo = this.updater((state, updatedTodo: ITodo) => {
    return {
      ...state,
      ...{
        todos: state.todos.map((todo: ITodo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      }
    };
  });

  readonly deleteTodo = this.updater((state, updatedTodo: ITodo) => {
    return {
      ...state,
      ...{
        todos: state.todos.filter((todo: ITodo) => todo.id !== updatedTodo.id)
      }
    };
  });

  // EFFECTS
  readonly loadTodos$ = this.effect(() => {
    return this.dataService.getTodo().pipe(
      catchError((err: Error) => {
        console.error(err);
        return of([]);
      }),
      tap(this.setTodos)
    );
  });

  readonly createTodo$ = this.effect((payload$: Observable<ITodo["text"]>) => {
    return payload$.pipe(
      switchMap(this.dataService.createTodo.bind(this)),
      tap(this.addTodo),
      catchError((err: Error) => {
        console.error(err);
      })
    );
  });

  readonly updateTodos$ = this.effect((payload$: Observable<ITodo>) => {
    return payload$.pipe(
      switchMap(this.dataService.updateTodo.bind(this)),
      tap(this.updateTodo),
      catchError((err: Error) => {
        console.error(err);
      })
    );
  });

  readonly deleteTodo$ = this.effect((payload$: Observable<ITodo>) => {
    return payload$.pipe(
      switchMap(this.dataService.deleteTodo.bind(this)),
      tap(this.deleteTodo),
      catchError((err: Error) => {
        console.error(err);
      })
    );
  });
}
