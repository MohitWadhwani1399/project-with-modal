import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'search', component: UserComponent }
];

export const UserRoutes = RouterModule.forChild(routes);

