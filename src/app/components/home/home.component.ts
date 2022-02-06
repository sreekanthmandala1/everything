import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  formarray(){
    this.router.navigate(['/', 'formarray']);
  }

  scrollintoview(){
    this.router.navigate(['/','scrollintoview'])
  }
  bootstrapMediaQueries(){
    this.router.navigate(['/','bootstrapmediaqueries'])

  }
}
