import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employees } from 'src/app/models/employees';
import { DepServiceService } from 'src/app/Services/dep-service.service';
import { EServiceService } from 'src/app/Services/e-service.service';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.css']
})
export class CreatEmployeeComponent implements OnInit {

  constructor(private serv : EServiceService, private route :Router) { 
    this.model.imgUrl = "https://icon-library.com/images/person-image-icon/person-image-icon-7.jpg"
  }
  model = new employees;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  add(dep,img,salary,mail,phone,eName,job){
    if(dep.valid && img.valid && salary.valid && mail.valid && phone.valid && eName.valid && job.valid){
      this.serv.create(this.model).subscribe(data=>{
        this.route.navigateByUrl("list-e");
      })
    }
    
  }
  
  ngOnInit(): void {
  }

}
