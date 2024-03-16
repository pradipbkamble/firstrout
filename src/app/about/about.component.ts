import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutserService } from '../routser.service';
import { Iarray } from '../product/interface/interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userid!:string;
  suerobj!:Iarray

  constructor( private _activater:ActivatedRoute,private _router:Router,private _servicero:RoutserService) { }

  ngOnInit(): void {
    
  
    // this._activater.params.subscribe(res=>{
    //   this.userid==res['id'];
    //   console.log(this.userid);
      
    //    this.suerobj=this._servicero.fetchuser(this.userid)
    // })
    
    this.userid=this._activater.snapshot.params['id']
    this.suerobj=this._servicero.fetchuser(this.userid)

  }
  ondelet(id:string){
    this._servicero.fetchdeletobj(id)
  }

}
