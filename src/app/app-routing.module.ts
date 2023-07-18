import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './module-components/user-list/user-list.component';
import { ProductListComponent } from './module-components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
