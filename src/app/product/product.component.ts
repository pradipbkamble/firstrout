import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutserService } from '../routser.service';
import { ProductserviceService } from '../productservice.service';
import { Iproduct } from '../productinterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodid!:Array<Iproduct>;
  selectedid!:string
  
  constructor(private _Router:Router,private _servicero:RoutserService,private _proservice:ProductserviceService) { }

  ngOnInit(): void {
    
    this.prodid=this._proservice.fetchproduct()
  }
  userrout(){
    this._servicero.fetcharr()
    this._Router.navigate((["/users"]))
  }
  getproid(getidforpro:string){
    this.selectedid=getidforpro
  }
  onadd(){
    
  }
}
