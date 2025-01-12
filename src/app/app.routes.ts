import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Simple redirection
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Guard applied here
    { path: 'login', component: LoginComponent }, // Login route
    { path: 'table', component: TableComponent, canActivate: [AuthGuard] }, // Guard applied to other routes
    { path: '**', component: NotFoundComponent }, // Wildcard route for 404
];
