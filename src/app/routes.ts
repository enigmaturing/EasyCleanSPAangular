import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { MachinesListComponent } from './machines-list/machines-list.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent},
    { path: 'sales', component: SalesListComponent, canActivate: [AuthGuard]},
    { path: 'clients', component: ClientsListComponent, canActivate: [AuthGuard]},
    { path: 'machines', component: MachinesListComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
