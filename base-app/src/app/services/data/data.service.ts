import { Injectable } from '@angular/core';
import names from '../../../assets/names.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getNames():{name:string}[] {
    return names
  }
  }