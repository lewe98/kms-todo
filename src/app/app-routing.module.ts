import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'registrierung',
        loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'landing',
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
    },
    {
        path: 'add',
        loadChildren: () => import('./pages/add/add.module').then(m => m.AddPageModule)
    },
    {
        path: 'popover-category',
        loadChildren: () => import('./components/popover-category/popover-category.module').then(m => m.PopoverCategoryPageModule)
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
