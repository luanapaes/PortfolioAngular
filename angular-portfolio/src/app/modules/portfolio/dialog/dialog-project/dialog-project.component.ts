import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss'
})
export class DialogProjectComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: IProjects,
    private _dialogRef: MatDialogRef<DialogProjectComponent>
  ){}

  public getData = signal<IProjects | null >(null);

  ngOnInit(): void {
      this.getData.set(this._data);
  }

  public closeDialog(){
    this._dialogRef.close()
  }
}
