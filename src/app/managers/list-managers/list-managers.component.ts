import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/Services/manager-service.service';

@Component({
  selector: 'app-list-managers',
  templateUrl: './list-managers.component.html',
  styleUrls: ['../../employees/list-employees/list-employees.component.css']
})
export class ListManagersComponent implements OnInit {
AllManagers:[];
  constructor(private serv: ManagerServiceService) {
    this.serv.Read().subscribe((data:any)=>{
       this.AllManagers = data;
    })
   }

  ngOnInit(): void {
  }

}
