import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searchText: string;
  employeList=[];

  constructor() {
    this.employeList = [
      {
        firstName : "celestine",
        lastName: "schimmel",
        address: "33454 Jadon Port"
    },
    {
      firstName : "sreekanth",
      lastName: "mandala",
      address: "398 hyderabad"
  },
  {
    firstName : "lizzie",
    lastName: "schumm",
    address: "3873 kerty park"
},
    ]
   }

  ngOnInit(): void {
  }

}
