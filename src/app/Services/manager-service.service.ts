import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { manager } from '../models/managers';
import { APIserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService extends APIserviceService<manager> {

  constructor(public http : HttpClient) {
    super("http://localhost:3000/managers" , http)
   }
}
