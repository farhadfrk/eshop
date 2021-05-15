import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './shaerdComponents/site-header/site-header.component';
import { SiteFooterComponent } from './shaerdComponents/site-footer/site-footer.component';
import { IndexComponent } from './pages/index/index.component';
import { SliderComponent } from './pages/index/slider/slider.component';
import { SpecialComponent } from './pages/index/special/special.component';
import { NewproductComponent } from './pages/index/newproduct/newproduct.component';
import { FavoriteComponent } from './pages/index/favorite/favorite.component';
import { LatestNewComponent } from './pages/index/latest-new/latest-new.component';
import { BrandsComponent } from './pages/index/brands/brands.component';
import {SliderService} from './services/slider.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {EshopInterceptor} from './Utilities/EshopInterceptor';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    IndexComponent,
    SliderComponent,
    SpecialComponent,
    NewproductComponent,
    FavoriteComponent,
    LatestNewComponent,
    BrandsComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    SweetAlert2Module.forRoot()
  ],
  providers: [
    SliderService ,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: EshopInterceptor,
    multi: true
  },
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
