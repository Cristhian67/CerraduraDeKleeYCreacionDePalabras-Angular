import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KleeneModuleComponent } from './components/kleene-module/kleene-module.component';
import { OplenguagesmoduleComponent } from './components/oplenguagesmodule/oplenguagesmodule.component';

const routes: Routes = [
  {
    title: 'Kleene',
    path: 'kleene',
    component: KleeneModuleComponent
  },
  {
    title: 'Operations lenguages',
    path: 'oplenguages',
    component: OplenguagesmoduleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
