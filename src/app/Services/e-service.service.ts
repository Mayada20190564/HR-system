import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employees } from '../models/employees';
import { APIserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class EServiceService extends APIserviceService<employees> {

  constructor(public http :HttpClient) {
    super("http://localhost:3000/employees", http)
   }
}