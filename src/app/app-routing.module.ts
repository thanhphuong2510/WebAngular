import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {path:'Blog',component:BlogComponent},
  {path:'Giỏ Hàng',component:CartComponent},
  {path:'Hàng Hóa',component:CategoryComponent},
  {path:'CheckOut',component:CheckoutComponent},
  {path:'Giới Thiệu',component:ContactComponent},
  {path:'Elements',component:ElementsComponent},
  {path:'Single-blog',component:SingleBlogComponent},
  {path:'Trang Chủ',component:HomeComponent},
  {path:'Single-product',component:SingleProductComponent},
  {path:'Theo dõi',component:TrackingComponent},
  {path:'Đăng Nhập',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
