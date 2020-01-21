import { NgModule, ModuleWithProviders } from "@angular/core";

import {
  MDBBootstrapModulesPro,
  MDBSpinningPreloader
} from "ng-uikit-pro-standard";

@NgModule({
  imports: [MDBBootstrapModulesPro.forRoot()],
  exports: [MDBBootstrapModulesPro],
  declarations: [],
  providers: []
})
export class mdbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: mdbModule,
      providers: [MDBSpinningPreloader]
    };
  }
}
