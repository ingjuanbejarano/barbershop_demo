import { Component, OnInit, OnDestroy } from "@angular/core";
import { Sale } from "src/app/shared/models/sale";
import { Barber } from "src/app/shared/models/barber";
import { Service } from "src/app/shared/models/service";
import { DataService } from "src/app/shared/services/data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastService } from "ng-uikit-pro-standard";
import { Subscription } from "rxjs";

@Component({
  selector: "app-barber-sale",
  templateUrl: "./barber-sale.component.html",
  styleUrls: ["./barber-sale.component.scss"]
})
export class BarberSaleComponent implements OnInit, OnDestroy {
  constructor(private data: DataService, private toastrService: ToastService) {}

  barbers: Barber[];
  services: Service[];
  sales: Sale[];
  barbersOptions = [];
  servicesOptions = [];
  barberSelected: Barber;
  serviceSelected: Service;
  barberSubscription: Subscription;
  serviceSubscription: Subscription;
  options = { opacity: 0.9 };

  saleForm = new FormGroup({
    barber: new FormControl("", Validators.required),
    service: new FormControl("", Validators.required)
  });

  ngOnDestroy() {
    this.barberSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }

  ngOnInit() {
    this.barberSubscription = this.data.getBarbers().subscribe(
      barbers => {
        this.barbers = barbers;
        barbers.forEach(barber => {
          this.barbersOptions = [
            ...this.barbersOptions,
            { value: barber.name, label: barber.name }
          ];
        });

        this.saleForm.get("barber").valueChanges.subscribe(barberName => {
          this.barberSelected = this.barbers.find(
            barber => barber.name === barberName
          );
        });
      },
      error => {
        this.toastrService.error(
          `Error: No se pudo obtener los barberos`,
          undefined,
          this.options
        );
      }
    );

    this.serviceSubscription = this.data.getServices().subscribe(
      services => {
        this.services = services;
        services.forEach(service => {
          this.servicesOptions = [
            ...this.servicesOptions,
            { value: service.title, label: service.title }
          ];
        });

        this.saleForm.get("service").valueChanges.subscribe(serviceTitle => {
          this.serviceSelected = this.services.find(
            service => service.title === serviceTitle
          );
        });
      },
      error => {
        this.toastrService.error(
          `Error: No se pudo obtener los servicios`,
          undefined,
          this.options
        );
      }
    );
  }

  async onSubmit() {
    try {
      const sale: Sale = {
        barber: this.barberSelected.name,
        service: this.serviceSelected.title,
        price: this.serviceSelected.price
      };

      await this.data.addSale(sale).toPromise();
      this.saleForm.reset();
      this.toastrService.success("Venta agregada", undefined, this.options);
    } catch (error) {
      this.toastrService.error(`Error: ${error.message}`);
    }
  }
}
