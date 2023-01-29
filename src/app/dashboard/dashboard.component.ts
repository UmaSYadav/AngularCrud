import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteOtaComponent } from '../delete-ota/delete-ota.component';
import { Ota } from '../ota';
import { OtaserviceService } from '../otaservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allOtas:Ota[]= [];
  displayedColumns: string[] = ['id', 'Name', 'Code', 'Person', 'Contact', 'Email', 'Location', 'Action'];

  constructor(private ota:OtaserviceService, public dialog: MatDialog) {

  }
  ngOnInit() : void {
    this.getAllOta();
  }

  getAllOta() {
    this.ota.getAllOtas().subscribe((data)=> {
      this.allOtas= data;
      console.log(this.allOtas);
    })
  }

  deleteOta(id:number) {
    console.log(id);
    const delConf= this.dialog.open(DeleteOtaComponent, {
      width: '250px',
      data: {id}
    });
    delConf.afterClosed().subscribe((result)=> {
      if(result) {
        this.allOtas= this.allOtas.filter((_)=> _.id != id)
      }
    })
  }
}
