import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface ErrorData {
  message: string;
}

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorData
  ) {
  }

  get message() {
    if (!this.data) {
      return 'Неизвестная ошибка';
    }
    if (this.data.message) {
      return this.data.message;
    }
    return JSON.stringify(this.data);
  }
}
