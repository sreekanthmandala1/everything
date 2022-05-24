import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {


  result :any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  onFetchproducts(){
    debugger
    this.http.get("https://samples-c4fa6-default-rtdb.firebaseio.com/",{responseType: 'text'}).subscribe(response => {
      const data = JSON.stringify(response)
      console.log(data)
      this.result = JSON.parse(data)
    },);
  }
}
