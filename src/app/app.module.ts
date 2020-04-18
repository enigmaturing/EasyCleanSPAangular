import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { MachinesListComponent } from './components/machines/machines-list/machines-list.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { appRoutes } from './routes';
import { ClientCardComponent } from './components/clients/client-card/client-card.component';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { MachineCardComponent } from './components/machines/machine-card/machine-card.component';
import { MachineGroupsListComponent } from './components/machines/machine-groups-list/machine-groups-list.component';
import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';
import { RadarChartComponent } from './components/dashboard/radar-chart/radar-chart.component';
import { MachineTariffEditorComponent } from './components/machines/machine-tariff-editor/machine-tariff-editor.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './directives/has-role.directive';
import { EmployeeRegisterComponent } from './components/admin/employee-register/employee-register.component';
import { EmployeesTableComponent } from './components/admin/employees-table/employees-table.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      DashboardComponent,
      ClientsListComponent,
      MachinesListComponent,
      SalesListComponent,
      ClientCardComponent,
      ClientDetailComponent,
      MachineCardComponent,
      MachineGroupsListComponent,
      LineChartComponent,
      RadarChartComponent,
      MachineTariffEditorComponent,
      AdminPanelComponent,
      HasRoleDirective,
      EmployeeRegisterComponent,
      EmployeesTableComponent,
      LoginComponent,
      PasswordResetComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      CollapseModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      TabsModule.forRoot(),
      ChartsModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }




