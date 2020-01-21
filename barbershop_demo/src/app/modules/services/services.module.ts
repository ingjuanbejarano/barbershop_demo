import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ServicesRoutingModule } from "./services-routing.module";
import { ServicesComponent } from "./services.component";
import { mdbModule } from "src/app/mdb.module";
import { FormModalComponent } from "./form-modal/form-modal.component";

@NgModule({
  declarations: [ServicesComponent, FormModalComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    mdbModule,
    ReactiveFormsModule
  ],
  entryComponents: [FormModalComponent]
})
export class ServicesModule {}
