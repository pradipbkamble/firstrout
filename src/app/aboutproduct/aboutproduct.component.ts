import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Iproduct } from '../productinterface';

@Component({
  selector: 'app-aboutproduct',
  templateUrl: './aboutproduct.component.html',
  styleUrls: ['./aboutproduct.component.scss']
})
export class AboutproductComponent implements OnInit {
  proid!:string;
  proobj!:Iproduct
  constructor(private _router:ActivatedRoute,private _routes:Router,private _prodservice:ProductserviceService) { }
//router -for navigate method call
//activatedrout-for activated params
  ngOnInit(): void {
    // this.proid= this._router.snapshot.params['prodid'],
    // this.proobj=this._prodservice.fetchprod(this.proid)
    this._router.params.subscribe(res=>{
      this.proid=res['prodid']
      console.log(this.proid);
      this.proobj=this._prodservice.fetchprod(this.proid)
    })
  }
  gotoedt(){
    this._routes.navigate(['prodedt'],{
      relativeTo:this._router,
      queryParamsHandling:'preserve'
    })
  }
  incompo(){
    this._router.snapshot.params['prodid']
    console.log(this._router.snapshot.params); 
  }
  
}


