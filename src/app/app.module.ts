import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutproductComponent } from './aboutproduct/aboutproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    UserComponent,
    NavbarComponent,
    AboutComponent,
    EdituserComponent,
    AboutproductComponent,
    EditproductComponent,
    AddproductComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
