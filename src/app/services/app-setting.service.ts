import { Injectable } from '@angular/core';
//declare const require: any;

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {
  appVersion="v3.1.0";
  constructor() { }
  getAppVersionfromPackage(){
    //const packageJson = require('../../../package.json');
    return this.appVersion;
  }
}
