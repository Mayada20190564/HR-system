import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { manager } from 'src/app/models/managers';
import { ManagerServiceService } from 'src/app/Services/manager-service.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['../../employees/creat-employee/creat-employee.component.css']
})
export class CreateManagerComponent implements OnInit {
model = new manager
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  constructor(private serv : ManagerServiceService, private route : Router) {
    this.model.imgUrl = "https://icon-library.com/images/person-image-icon/person-image-icon-7.jpg"
   }
  add(dep,img,salary,mail,phone,eName,job){
    if(dep.valid && img.valid && salary.valid && mail.valid && phone.valid && eName.valid && job.valid){
      this.serv.create(this.model).subscribe(data=>{
        this.route.navigateByUrl("list-m");
      })
    }
    
  }

  ngOnInit(): void {
  }

}
