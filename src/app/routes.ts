import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { MachinesListComponent } from './machines-list/machines-list.component';
import { SalesListComponent } from './sales-list/sales-list.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'home', component: HomeComponent},
    { path: 'sales', component: SalesListComponent},
    { path: 'clients', component: ClientsListComponent},
    { path: 'machines', component: MachinesListComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
