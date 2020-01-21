import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarberSaleComponent } from "./barber-sale/barber-sale.component";
import { OverallSalesComponent } from "./overall-sales/overall-sales.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "overall" },
  { path: "overall", component: OverallSalesComponent },
  { path: "barberSale", component: BarberSaleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {}
