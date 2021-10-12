import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService<T> {

  constructor(@Inject(String) private configUrl:string , public http: HttpClient ) {}
  // create/ add data
  create(model) :Observable<T>{
    return this.http.post<T>(this.configUrl , model);
  }
  // Read data
   Read() : Observable<T>{
     return this.http.get<T>(this.configUrl);
   }
   ReadById(id) : Observable<T>{
     return this.http.get<T>(this.configUrl+`/${id}`);
   }
  //  update data
   update(model , id) : Observable<T>{
     return this.http.put<T>(this.configUrl+`/${id}`,model)
   }
  //  delete data
  delete(id):Observable<T>{
    return this.http.delete<T>(this.configUrl+`/${id}`);
  }   
}