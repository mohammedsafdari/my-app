import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service:ProductService) { }

  imageButton: string = 'Show Image';
  imageBool: boolean = false;

  products:any;
  
  imageFunction():void{
    this.imageBool = !this.imageBool

    if(this.imageButton == 'Show Image')
    {
      this.imageButton = 'Hide Image';
    }
    else
    {
      this.imageButton = 'Show Image';
    }
  }

  // ngOnInit() {
  //   this.products=this.service.getAllProducts()
  // }

  ngOnInit() {
    this.service.getAllProducts()
    .subscribe(data=>this.products=data);
  }

}
