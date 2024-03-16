import { Component, OnInit } from '@angular/core';
import { RoutserService } from './routser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firstrout';
constructor(private _servicero:RoutserService){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}
