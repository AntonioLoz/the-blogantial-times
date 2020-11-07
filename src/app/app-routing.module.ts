import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewPublicationComponent } from './components/new-publication/new-publication.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'publications', component: PublicationsComponent,
      children: [
        {path: 'new', component: NewPublicationComponent, canActivate: [AuthGuard]}
      ]},
  {path: '**', component:PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
