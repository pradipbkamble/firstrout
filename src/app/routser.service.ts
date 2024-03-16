import { Injectable } from '@angular/core';
import { Iarray } from './product/interface/interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class RoutserService {
  constructor(private _snackbar:SnackbarService) { }
cereatearray:Array<Iarray>=[
{name:"pat",
run:100,
id:"1"},
{name:"virat",
run:300,
id:"2"},
{name:"rohit",
run:250,
id:"3"},
{name:"surya",
run:188,
id:"4"},

]
 fetcharr(){
  return this.cereatearray
 }
 fetchuser(userid:string):Iarray{
  return this.cereatearray.find(app=>app.id===userid) as Iarray
 }
 fetchupdate(updateuser:Iarray){
  let update=this.cereatearray.findIndex(user=>user.id===updateuser.id)
  this.cereatearray[update]=updateuser
 }
 fetchadd(obj:Iarray){
  this.cereatearray.push(obj)
  this._snackbar.opensnackbar('submit')
 }
 fetchdeletobj(ids:string){
  let findindex=this.cereatearray.findIndex(user=>user.id===ids)
  this.cereatearray.splice(findindex,1)
 }
}
