import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TrackingComponent } from './tracking/tracking.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    BlogComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ElementsComponent,
    SingleBlogComponent,
    SingleProductComponent,
    TrackingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
