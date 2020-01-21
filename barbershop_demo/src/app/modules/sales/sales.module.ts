import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { mdbModule } from "src/app/mdb.module";
import { SalesRoutingModule } from "./sales-routing.module";
import { BarberSaleComponent } from "./barber-sale/barber-sale.component";
import { OverallSalesComponent } from "./overall-sales/overall-sales.component";

@NgModule({
  declarations: [BarberSaleComponent, OverallSalesComponent],
  imports: [CommonModule, SalesRoutingModule, ReactiveFormsModule, mdbModule]
})
export class SalesModule {}
