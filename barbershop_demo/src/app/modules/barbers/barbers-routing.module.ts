import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarbersComponent } from "./barbers.component";

const routes: Routes = [{ path: "", component: BarbersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarbersRoutingModule {}
