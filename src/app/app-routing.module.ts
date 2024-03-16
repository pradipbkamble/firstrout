import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AboutproductComponent } from './aboutproduct/aboutproduct.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    
  },
 
  {
    path:'products',
    component:ProductComponent,
    children:[
      {
        path:'productadd',
        component:EditproductComponent,
      },
      {
        path:':prodid',
        component:AboutproductComponent
        
      },
      {
        path:':prodid/prodedt',
        component:EditproductComponent
        
      },
]
  },
  

  {
    path:'users',
    component:UserComponent,
    children:[
      {
        path:'adduser',
        component:EdituserComponent
      },
      {
        path:':id',
        component:AboutComponent
      },
      {
        path:':id/editid',
        component:EdituserComponent
      }
    
    ]
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
