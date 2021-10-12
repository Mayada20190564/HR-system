import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from 'src/app/models/employees';
import { EServiceService } from 'src/app/Services/e-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['.././creat-employee/creat-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
id;

  constructor(private serv : EServiceService, private route :Router, private activeroute : ActivatedRoute) {
    this.id = activeroute.snapshot.paramMap.get("id");
    this.serv.ReadById(this.id).subscribe(data=>{
     this.model= data;
})

   }
   model = new employees;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  update(dep,img,salary,mail,phone,eName,job){
    if(dep.valid && img.valid && salary.valid && mail.valid && phone.valid && eName.valid && job.valid){
      this.serv.update(this.model, this.id).subscribe(data=>{
        this.route.navigateByUrl(`profile-e/${this.id}`);
      })
    }
    
  }

  ngOnInit(): void {
  }

}
