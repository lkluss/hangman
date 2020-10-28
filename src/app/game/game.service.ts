import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getAnswerList():Observable<Array<{answer:string}>>{
    return this.http.get<Array<{answer:string}>>(environment.apiUrl);
  }
}
