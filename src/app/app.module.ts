import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TodoModule } from "./containers/todo/todo.module";
import { FabDialogComponent } from "./components/fab-dialog/fab-dialog.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TodoModule],
  bootstrap: [AppComponent],
  entryComponents: [FabDialogComponent]
})
export class AppModule {}
