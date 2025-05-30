import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => HomeComponent
  },
  {
    path: "product",
    loadComponent: () => ProductsComponent
  },
  {
    path: "category",
    loadComponent: () => CategoryComponent
  },
  {
    path: "cart",
    loadComponent: () => CartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
