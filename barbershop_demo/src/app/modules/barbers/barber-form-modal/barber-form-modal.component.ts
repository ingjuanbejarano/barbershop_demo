import { Component, OnInit } from "@angular/core";
import { MDBModalRef } from "ng-uikit-pro-standard";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";

@Component({
  selector: "app-barber-form-modal",
  templateUrl: "./barber-form-modal.component.html",
  styleUrls: ["./barber-form-modal.component.scss"]
})
export class BarberFormModalComponent implements OnInit {
  constructor(public modalRef: MDBModalRef) {}

  action: Subject<any> = new Subject();
  barberForm = new FormGroup({
    name: new FormControl("", Validators.required),
    idNumber: new FormControl("", Validators.required),
    email: new FormControl(""),
    phoneNumber: new FormControl("", Validators.required)
  });

  get name() {
    return this.barberForm.get("name");
  }
  get idNumber() {
    return this.barberForm.get("idNumber");
  }
  get phoneNumber() {
    return this.barberForm.get("phoneNumber");
  }

  ngOnInit() {}

  onSubmit() {
    this.action.next(this.barberForm.value);
  }
}
