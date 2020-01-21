import { Component, OnInit } from "@angular/core";
import { Sale } from "src/app/shared/models/sale";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-overall-sales",
  templateUrl: "./overall-sales.component.html",
  styleUrls: ["./overall-sales.component.scss"]
})
export class OverallSalesComponent implements OnInit {
  constructor(private data: DataService) {}
  sales: Sale[];
  total = 0;
  headElements = ["Precio", "Barbero", "Servicio"];

  async ngOnInit() {
    this.sales = await this.data.getSales().toPromise();
    this.setTotal();
  }

  setTotal() {
    this.sales.forEach(sale => {
      this.total += sale.price;
    });
  }
}
