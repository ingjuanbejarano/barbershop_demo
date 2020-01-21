import { Component, OnInit } from "@angular/core";
import { MDBModalRef } from "ng-uikit-pro-standard";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";

@Component({
  selector: "app-form-modal",
  templateUrl: "./form-modal.component.html",
  styleUrls: ["./form-modal.component.scss"]
})
export class FormModalComponent implements OnInit {
  constructor(public modalRef: MDBModalRef) {}

  action: Subject<any> = new Subject();
  serviceForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl(""),
    price: new FormControl("", Validators.required)
  });

  get title() {
    return this.serviceForm.get("title");
  }
  get price() {
    return this.serviceForm.get("price");
  }

  ngOnInit() {}

  onSubmit() {
    this.action.next(this.serviceForm.value);
  }
}
