import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutserService } from '../routser.service';
import { Iarray } from '../product/interface/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  userid!:string;
  userobj!:Iarray;
  userform!:FormGroup;
  isuserupdate:boolean=false
  constructor(private _route:ActivatedRoute,private _router:Router,private _snackbar:SnackbarService,private _servicero:RoutserService,private _uuid:UuidService) { }

  ngOnInit(): void {
    this.formuser()
    this.userid=this._route.snapshot.params['id'];
    console.log(this.userid);
    if(this.userid){
      this.isuserupdate=true
      this.userobj=this._servicero.fetchuser(this.userid);
      // this.userform.controls['name'].patchValue(this.userobj.name)
      this.userform.patchValue(this.userobj)
    }
    else{
      this.isuserupdate=false
    }
   
  }
formuser(){
  this.userform=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    run:new FormControl(null,Validators.required)
  })
}
onupdate(){
  let updateid:Iarray={...this.userform.value,id:this.userid}
  this._servicero.fetchupdate(updateid)
  this.userform.reset()
  this._snackbar.opensnackbar('updated ')
  this._router.navigate(['users'])
}
onsubmit(){
  let addidobj={...this.userform.value,id:this._uuid.uuid()}
  console.log(addidobj);
  
  this._servicero.fetchadd(addidobj)
  this.userform.reset()
  this._snackbar.opensnackbar('onsumit')
  this._router.navigate(['users'])
  

}

}
