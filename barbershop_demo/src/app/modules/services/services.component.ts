import { Component, OnInit } from "@angular/core";
import {
  MDBModalRef,
  MDBModalService,
  ToastService
} from "ng-uikit-pro-standard";
import { FormModalComponent } from "./form-modal/form-modal.component";
import { Service } from "../../shared/models/service";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  constructor(
    private modalService: MDBModalService,
    private data: DataService,
    private toastrService: ToastService
  ) {}

  modalRef: MDBModalRef;
  services: Service[];
  options = { opacity: 0.9 };

  async ngOnInit() {
    try {
      this.services = await this.data.getServices().toPromise();
    } catch (error) {
      this.toastrService.error(
        `Error: No se pudo obtener los servicios`,
        undefined,
        this.options
      );
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(FormModalComponent);
    this.modalRef.content.action.subscribe(async (result: Service) => {
      try {
        await this.data.addService(result).toPromise();
        this.services = await this.data.getServices().toPromise();
        this.modalRef.hide();
        this.toastrService.success(
          "Servicio agregado",
          undefined,
          this.options
        );
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
