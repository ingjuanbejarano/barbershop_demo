import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "services",
    loadChildren: () =>
      import("./modules/services/services.module").then(m => m.ServicesModule)
  },
  {
    path: "barbers",
    loadChildren: () =>
      import("./modules/barbers/barbers.module").then(m => m.BarbersModule)
  },
  {
    path: "sales",
    loadChildren: () =>
      import("./modules/sales/sales.module").then(m => m.SalesModule)
  },
  { path: "", redirectTo: "sales", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
