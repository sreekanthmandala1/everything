import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/post-api.model';
import { PostApiService } from 'src/app/services/post-api.service';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.scss']
})
export class PostApiComponent implements OnInit {
 @ViewChild('userForm') userForm :NgForm;
  person : Person = new Person();
  users =[{

  }]
  constructor(private postApiService : PostApiService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onAddUser(userData:Person){
    console.log(userData);
    this.http.post<Person>('https://post-api-16b69-default-rtdb.firebaseio.com/person.json',userData).subscribe((res)=>{
      console.log(res)
    })
  }
}
