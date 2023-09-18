import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {

  constructor() { }

  getApiBaseUrl():string{
    return "https://unifycloud.in/api/";
    //return "https://localhost:44301/api/"
  }
}
