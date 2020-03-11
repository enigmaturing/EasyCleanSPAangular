import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { ClientDetailResolver } from './resolvers/client-detail.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'sales', component: SalesListComponent, canActivate: [AuthGuard]},
    { path: 'clients', component: ClientsListComponent, canActivate: [AuthGuard]},
    { path: 'clients/:id', component: ClientDetailComponent, canActivate: [AuthGuard], resolve: {clientDetails: ClientDetailResolver}},
    { path: 'machines', component: MachinesListComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
