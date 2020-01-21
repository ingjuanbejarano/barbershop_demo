import { Component, OnInit } from "@angular/core";
import {
  MDBModalRef,
  MDBModalService,
  ToastService
} from "ng-uikit-pro-standard";
import { Barber } from "src/app/shared/models/barber";
import { BarberFormModalComponent } from "./barber-form-modal/barber-form-modal.component";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-barbers",
  templateUrl: "./barbers.component.html",
  styleUrls: ["./barbers.component.scss"]
})
export class BarbersComponent implements OnInit {
  constructor(
    private modalService: MDBModalService,
    private data: DataService,
    private toastrService: ToastService
  ) {}

  modalRef: MDBModalRef;
  barbers: Barber[];
  options = { opacity: 0.9 };

  async ngOnInit() {
    try {
      this.barbers = await this.data.getBarbers().toPromise();
    } catch (error) {
      this.toastrService.error(
        `Error: No se pudo obtener los barberos`,
        undefined,
        this.options
      );
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(BarberFormModalComponent);
    this.modalRef.content.action.subscribe(async (result: Barber) => {
      try {
        await this.data.addBarber(result).toPromise();
        this.barbers = await this.data.getBarbers().toPromise();
        this.modalRef.hide();
        this.toastrService.success("Barbero agregado", undefined, this.options);
      } catch (error) {
        this.toastrService.error(
          `Error: No se pudo completar la accion`,
          undefined,
          this.options
        );
      }
    });
  }
}
