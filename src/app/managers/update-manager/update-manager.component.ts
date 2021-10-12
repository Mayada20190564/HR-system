import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { manager } from 'src/app/models/managers';
import { ManagerServiceService } from 'src/app/Services/manager-service.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['../../employees/creat-employee/creat-employee.component.css']
})
export class UpdateManagerComponent implements OnInit {
id;
model = new manager
  constructor(private serv : ManagerServiceService, private activerout : ActivatedRoute, private route :Router) { 
    this.id = this.activerout.snapshot.paramMap.get("id");
    this.serv.ReadById(this.id).subscribe((data:any)=>{
      this.model = data;
    })

  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  add(dep,img,salary,mail,phone,eName,job){
    if(dep.valid && img.valid && salary.valid && mail.valid && phone.valid && eName.valid && job.valid){
      this.serv.update(this.model, this.id).subscribe(data=>{
        this.route.navigateByUrl("list-m");
      })
    }
    
  }
  ngOnInit(): void {
  }

}
