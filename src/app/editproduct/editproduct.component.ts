import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Iproduct } from '../productinterface';
import { __values } from 'tslib';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  formsub!:FormGroup;
  edtpro!:string;
  showbtn:boolean=false;
  edtproobj!:Iproduct;
  proid!:Iproduct;
  
  constructor(private _router:ActivatedRoute,private _snackbar:SnackbarService,private _prodservice:ProductserviceService, private _uuid:UuidService) { }

  ngOnInit(): void {
    this.onform()
     this.edtpro = this._router.snapshot.params['prodid']
    
     if(this.edtpro){
      this.showbtn=true
     this.edtproobj =this._prodservice.fetchprod(this.edtpro);
    // this.formsub.controls['formsub'].patchValue(this.edtproobj);
    this.formsub.patchValue(this.edtproobj)
     }
     else{
      this.showbtn=false
     }

  

}
onform(){
  this.formsub=new FormGroup({
    pname:new FormControl(null,Validators.required),
    pdetails:new FormControl(null,Validators.required),
    pstatus:new FormControl(null,Validators.required),
    
  });
}
onupdate(){
  let proid:Iproduct={...this.formsub.value,id:this.edtpro}
  console.log(proid);
  
  this._prodservice.fetchupdate(proid)
  console.log(proid);
  this._snackbar.opensnackbar('updated')
}
onsubmit(){
let proad:Iproduct={...this.formsub.value, id:this._uuid.uuid()}
this._prodservice.addfetch(proad)
console.log(proad);
this._snackbar.opensnackbar('onsumit')

}
}
