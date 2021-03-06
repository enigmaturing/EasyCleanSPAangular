import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { ClientDetailResolver } from './resolvers/client-detail.resolver';
import { MachineGroupsListComponent } from './components/machines/machine-groups-list/machine-groups-list.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { LoginComponent } from './components/auth/login/login.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'sales', component: SalesListComponent, canActivate: [AuthGuard]},
    { path: 'clients', component: ClientsListComponent, canActivate: [AuthGuard]},
    { path: 'clients/:id', component: ClientDetailComponent, canActivate: [AuthGuard], resolve: {clientDetails: ClientDetailResolver}},
    { path: 'machines', component: MachineGroupsListComponent, canActivate: [AuthGuard]},
    { path: 'admin', component: AdminPanelComponent, data: {roles: ['Admin', 'BackOfficeEmployee']}, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
