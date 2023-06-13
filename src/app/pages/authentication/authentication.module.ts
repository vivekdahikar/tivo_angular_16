import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { LoginImageOneComponent } from './login/login-image-one/login-image-one.component';
import { LoginImageTwoComponent } from './login/login-image-two/login-image-two.component';
import { LoginSimpleComponent } from './login/login-simple/login-simple.component';
import { SweetalertComponent } from './login/sweetalert/sweetalert.component';
import { TooltipComponent } from './login/tooltip/tooltip.component';
import { ValidationComponent } from './login/validation/validation.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RegisterComponent } from './register/register.component';
import { BgVideoComponent } from './register/bg-video/bg-video.component';
import { RegisterImageOneComponent } from './register/register-image-one/register-image-one.component';
import { RegisterSimpleComponent } from './register/register-simple/register-simple.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CreatePasswordComponent,
    ForgetPasswordComponent,
    LoginComponent,
    LoginImageOneComponent,
    LoginImageTwoComponent,
    LoginSimpleComponent,
    SweetalertComponent,
    TooltipComponent,
    ValidationComponent,
    MaintenanceComponent,
    RegisterComponent,
    BgVideoComponent,
    RegisterImageOneComponent,
    RegisterSimpleComponent,
    UnlockUserComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
