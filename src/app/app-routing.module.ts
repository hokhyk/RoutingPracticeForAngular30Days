import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Component
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

// Guard
import { LayoutGuard } from './layout/layout.guard';
import { EnsureLoginGuard } from './login/ensure-login.guard';

// Product
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductDetailResolverService } from './product/product-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LayoutGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'feature',
        // canActivate: [LayoutGuard],
        loadChildren: './feature/feature.module#FeatureModule'
      },
    ]
  },
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductDetailResolverService
        }
      }
    ]
  },
  {
    path: 'feature',
    // canActivate: [LayoutGuard],
    loadChildren: './feature/feature.module#FeatureModule'
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    // preloadingStrategy: PreloadAllModules,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
