import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { departement } from '../models/departement';
import { APIserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class DepServiceService extends APIserviceService<departement> {

  constructor(public http : HttpClient) { 
    super("http://localhost:3000/departements",http)
  }
}
