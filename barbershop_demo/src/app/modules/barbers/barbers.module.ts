import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { BarbersRoutingModule } from "./barbers-routing.module";
import { BarbersComponent } from "./barbers.component";
import { mdbModule } from "src/app/mdb.module";
import { BarberFormModalComponent } from "./barber-form-modal/barber-form-modal.component";

@NgModule({
  declarations: [BarbersComponent, BarberFormModalComponent],
  imports: [CommonModule, BarbersRoutingModule, mdbModule, ReactiveFormsModule],
  entryComponents: [BarberFormModalComponent]
})
export class BarbersModule {}
