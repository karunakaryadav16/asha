import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemDeleteComponent } from './components/item-delete/item-delete.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'add', component: ItemAddComponent },
  { path: 'edit/:id', component: ItemEditComponent },
  { path: 'delete/:id', component: ItemDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
