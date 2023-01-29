import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ota } from '../ota';
import { OtaserviceService } from '../otaservice.service';

@Component({
  selector: 'app-add-ota',
  templateUrl: './add-ota.component.html',
  styleUrls: ['./add-ota.component.css']
})
export class AddOtaComponent implements OnInit {
  otaRecords:Ota= {
    id: 0,
    Name: '',
    Code: '',
    Person: '',
    Contact: '',
    Email: '',
    Location: ''
  }
  constructor(private otaService:OtaserviceService, private router:Router) {}
  ngOnInit(): void {}

  addRecords() {
    this.otaService.create(this.otaRecords).subscribe(()=>{
      this.router.navigate(["/"])
    });
  }
  

}
