import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { departement } from 'src/app/models/departement';
import { employees } from 'src/app/models/employees';
import { manager } from 'src/app/models/managers';
import { DepServiceService } from 'src/app/Services/dep-service.service';
import { EServiceService } from 'src/app/Services/e-service.service';
import { ManagerServiceService } from 'src/app/Services/manager-service.service';

@Component({
  selector: 'app-dep-profile',
  templateUrl: './dep-profile.component.html',
  styleUrls: ['../../employees/profile//profile.component.css']
})
export class DepProfileComponent implements OnInit {
id;
departement = new departement
Emps: [];
mang :[];
  constructor(private serv : DepServiceService, private activeroute : ActivatedRoute, private EmpServ: EServiceService, private MengServ : ManagerServiceService, private route : Router) {
    this.id = this.activeroute.snapshot.paramMap.get('id');
    this.serv.ReadById(this.id).subscribe((data:any)=>{
      this.departement = data;
    }) 
    this.EmpServ.Read().subscribe((data:any)=>{
      this.Emps = data
    })
    this.MengServ.Read().subscribe((data:any)=>{
      this.mang = data
    })

   }
   delete(){
     return this.serv.delete(this.id).subscribe(data=>{
       this.route.navigateByUrl("/allDeps")
     })
   }

  ngOnInit(): void {
  }

}
