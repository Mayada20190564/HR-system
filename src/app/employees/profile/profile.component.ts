import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from 'src/app/models/employees';
import { EServiceService } from 'src/app/Services/e-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  emp = new employees;
  constructor(private serv : EServiceService , private activeroute : ActivatedRoute, private route:Router) {
    this.id = this.activeroute.snapshot.paramMap.get("id");
    this.serv.ReadById(this.id).subscribe((data:any)=>{
      this.emp = data;
    })
          
    }
    delete(){
      this.serv.delete(this.id).subscribe(data=>{
        this.route.navigateByUrl('list-e')
      })
    }
   

  ngOnInit(): void {
  }

}
