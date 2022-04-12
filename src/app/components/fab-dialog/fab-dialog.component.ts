import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "fab-dialog",
  templateUrl: "./fab-dialog.component.html",
  styles: ["./fab-dialog.component.css"]
})
export class FabDialogComponent {
  public inputValue: string;
  @Output() dialogEmitter = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<FabDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // reassign to prevent this component from directly modifying the parent data via two-way db
    // we want to keep that contained to this component
    this.inputValue = this.data.inputText;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onOk(inputValue: string): void {
    // pass the confirmed input value back up to the dialog consumer
    this.dialogRef.close(inputValue);
  }
}
