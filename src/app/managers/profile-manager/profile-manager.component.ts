import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListEmployeesComponent } from 'src/app/employees/list-employees/list-employees.component';
import { manager } from 'src/app/models/managers';
import { EServiceService } from 'src/app/Services/e-service.service';
import { ManagerServiceService } from 'src/app/Services/manager-service.service';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['../../employees/profile//profile.component.css']
})
export class ProfileManagerComponent implements OnInit {
id;
mang = new manager;
DepEmp:[];
  constructor(private serv : ManagerServiceService , private activeroute : ActivatedRoute, private route :Router, private empServ : EServiceService) { 
   this.id = this.activeroute.snapshot.paramMap.get("id");
    this.serv.ReadById(this.id).subscribe((data:any)=>{
      this.mang = data;
    })
    this.empServ.Read().subscribe((data:any)=>{
      this.DepEmp = data
    })
  }
  delete(){
    this.serv.delete(this.id).subscribe(data=>{
      this.route.navigateByUrl("/list-m")
    })
  }
 
  

  ngOnInit(): void {
  }

}
