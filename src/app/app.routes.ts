
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent}
];
// export default RouterModule.forRoot(routes);
