import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from 'src/components/individual/individual.component';
import { IndividualDetailsComponent } from 'src/components/individual-details/individual-details.component';
import { IndividualService } from './individual.service';
import { individual } from 'src/models/individual';

const routes: Routes = [
  {path: 'individuos', component : IndividualComponent},
  { path: 'detalle/:id', component: IndividualDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
