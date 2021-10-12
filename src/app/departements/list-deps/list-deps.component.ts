import { Component, OnInit } from '@angular/core';
import { departement } from 'src/app/models/departement';
import { employees } from 'src/app/models/employees';
import { DepServiceService } from 'src/app/Services/dep-service.service';

@Component({
  selector: 'app-list-deps',
  templateUrl: './list-deps.component.html',
  styleUrls: ['./list-deps.component.css']
})
export class ListDepsComponent implements OnInit {
  AllDeps: departement []
  constructor(private serv: DepServiceService) {
    this.serv.Read().subscribe((data: any) => {
      this.AllDeps = data
    })
   
  }
  NewDep = new departement
  departement = new departement
  Emps:employees [];
  addDep(DepName) {
    for(let Dname of this.AllDeps ){
      if(DepName.value != Dname.name){
        if(DepName.errors == null){
          return this.serv.create(this.NewDep).subscribe(data => {
            window.location.reload();
            console.log(DepName);
          })
        }else{
          console.log(DepName);
        }

      }
    }
   
    
  }

  ngOnInit(): void {
  }

}
