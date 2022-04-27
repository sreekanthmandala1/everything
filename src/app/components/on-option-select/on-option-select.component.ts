import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-on-option-select',
  templateUrl: './on-option-select.component.html',
  styleUrls: ['./on-option-select.component.scss']
})
export class OnOptionSelectComponent implements OnInit {
  onSelectPaticipant:boolean= false;
  onSelectIdentifier : boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  options = [
    { text: 'participant' },
    { text: 'identifier' },

  ]

  mySelectHandler(event:any){
    if(event=="participant"){
      this.onSelectPaticipant =true;
    }
  }

}
