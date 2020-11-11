import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { SearchComponent } from './components/search/search.component';
import { NewNavComponent } from './new-nav/new-nav.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';




const routes: Routes = [
  { path: 'result', loadChildren: './components/user/user.module#UserModule' },
  { path:"newnav" , component:NewNavComponent},
  { path:"search" , component:SearchComponent},
  { path:"grid" , component:GridComponent},
  { path:"" , component:AccountComponent},
  { path:"panel" , component:SettingsComponent},
  { path:"modal" , component:EditModalComponent}
  
];

export const AppRoutes = RouterModule.forRoot(routes);

