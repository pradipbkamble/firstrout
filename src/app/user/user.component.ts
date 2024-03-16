import { Component, OnInit } from '@angular/core';
import { RoutserService } from '../routser.service';
import { Iarray } from '../product/interface/interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users!:Iarray[]
  useridnew!:string
  constructor(private _servicero:RoutserService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.users=this._servicero.fetcharr()

    
  }
  onuser(userid:string){
this.useridnew=userid
  }
  
}
