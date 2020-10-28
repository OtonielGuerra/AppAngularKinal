import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Route } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'footer', component: FooterComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});