import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  maxLength: number = 15;
  lengthSizes=[8,9,10,11,12,13,14,15,16,17,18];
  namesList:{name:string}[]
  constructor(private dataService:DataService) {
    this.namesList = this.dataService.getNames();
   }

   ngOnInit(): void {}

   setLengthSize = (newLength: number) => {
     this.maxLength = newLength
   }
 
}
