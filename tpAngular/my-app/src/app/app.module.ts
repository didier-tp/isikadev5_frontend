import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { LoginComponent } from './login/login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    LoginComponent,
    WelcomeComponent,
    ConversionComponent,
    AdminDeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    BsUtilModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyAuthInterceptor,
    multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
