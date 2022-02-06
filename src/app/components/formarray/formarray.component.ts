import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {
quantityV : any;
priceV:any;
Result:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    lessons : this.fb.array([])
  });

  get lessons(){
   return this.form.controls["lessons"] as FormArray;
  }
  addLesson(){
    const lessonForm = this.fb.group({
      quantity : ['1'],
      price : ['2'],
      total : ['2'],
    });
    this.lessons.push(lessonForm);
     console.log(this.lessons)
  }

}
