import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, Observable, throwError } from 'rxjs';
const httpOptions={  
  headers : new HttpHeaders({  
    'Authorization':'563492ad6f91700001000001ad8238c6890a47218341fa4008c5c3b7'  
  })  
} 
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  
  constructor(private http:HttpClient) { }
  getPhoto(search:any,page:any):Observable<any>{
    let url = "https://api.pexels.com/v1/search?query="+search+"&per_page="+page;
    return this.http.get<any>(url,httpOptions); 
  }
  
}
