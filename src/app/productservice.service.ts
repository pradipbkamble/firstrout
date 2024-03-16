import { Injectable } from '@angular/core';
import { Iproduct, ProductsStatus } from './productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  productArray: Array<Iproduct> = [
    {
      pname: 'Samsung 31',
      pdetails: 'Mobile 128 6',
      pstatus:"inprocess",
      id: '1',
    },
    {
      pname: 'Samsung S32',
      pdetails: 'Mobile 128 6',
      pstatus:"dispatch",
      id: '2',
},
{
  pname: 'nokiya',
  pdetails: 'Mobile23',
  pstatus:"deliver",
  id: '3',
},
{
  pname: 'nokiya',
  pdetails: 'Mobile23',
  pstatus:"deliver",
  id: '4',
}
];
fetchproduct(){
return this.productArray
}
fetchprod(pid:string):Iproduct{
return this.productArray.find(pro =>pro.id === pid) as Iproduct
}
fetchupdate(updateobj:Iproduct){
  // this.productArray.forEach(post=>{
  //   if(post.id===updateobj.id){

  //     post=updateobj
  //   }
  // })
  let productindex=this.productArray.findIndex(post=>post.id===updateobj.id);
   this.productArray[productindex]=updateobj
  console.log(this.productArray[productindex]=updateobj);
  
}
addfetch(product:Iproduct){
  this.productArray.push(product)
}

}
