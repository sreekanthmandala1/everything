import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  products=[
    {
      id:'p1',
      name:'laptop',
      price:4500
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(id:any,name:any,price:any){
    this.products.push({
      id:id.value,
      name:name.value,
      price:price.value
    })
  }

  onDeleteProduct(id){
    if(confirm('Do you want to delete this product')){
      this.products.splice(id,1);
    }
  }
}
