import { Component, OnInit } from '@angular/core';
import { EServiceService } from 'src/app/Services/e-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
empData:[];
  constructor(private serv : EServiceService) { 
    this.serv.Read().subscribe((data : any) =>{ //get data in array
      this.empData = data;
    })
  }
  
  ngOnInit(): void {
  }

}
