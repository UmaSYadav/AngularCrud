import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ota } from '../ota';
import { OtaserviceService } from '../otaservice.service';

@Component({
  selector: 'app-edit-ota',
  templateUrl: './edit-ota.component.html',
  styleUrls: ['./edit-ota.component.css']
})
export class EditOtaComponent implements OnInit {
  otaRecords:Ota= {
    id: 0,
    Name: '',
    Code: '',
    Person: '',
    Contact: '',
    Email: '',
    Location: ''
  }

  constructor(private otaService:OtaserviceService, private route:ActivatedRoute, private router:Router) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=> {
      let id= Number(param.get('id'));
      this.getOtaById(id);
    })
  }

  getOtaById(id:number) {
    this.otaService.getOtaById(id).subscribe((data)=>{
      this.otaRecords= data;
    });
  }
  
  editRecords() {
    this.otaService.updateOtaById(this.otaRecords).subscribe(()=> {
      this.router.navigate(["/"]);
    })
  }
}
