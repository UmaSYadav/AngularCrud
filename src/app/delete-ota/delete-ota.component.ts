import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OtaserviceService } from '../otaservice.service';

@Component({
  selector: 'app-delete-ota',
  templateUrl: './delete-ota.component.html',
  styleUrls: ['./delete-ota.component.css']
})
export class DeleteOtaComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteOtaComponent>, private ota:OtaserviceService,
    @Inject(MAT_DIALOG_DATA) public data:any ) {}

  ngOnInit(): void {
    
  }

  confirmDelete() {
    this.ota.delete(this.data.id).subscribe(()=> {
      this.dialogRef.close(this.data.id)
    })
  }
}
