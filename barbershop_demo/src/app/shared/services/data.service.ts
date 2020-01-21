import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Barber } from "../models/barber";
import { Service } from "../models/service";
import { Sale } from "../models/sale";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  private baseURL = "http://localhost:3000";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getBarbers() {
    return this.http.get<Barber[]>(`${this.baseURL}/barbers`);
  }

  addBarber(barber: Barber) {
    return this.http.post<Barber>(
      `${this.baseURL}/barbers/create`,
      barber,
      this.httpOptions
    );
  }

  getServices() {
    return this.http.get<Service[]>(`${this.baseURL}/services`);
  }

  addService(service: Service) {
    return this.http.post<Service>(
      `${this.baseURL}/services/create`,
      service,
      this.httpOptions
    );
  }

  getSales() {
    return this.http.get<Sale[]>(`${this.baseURL}/sales`);
  }

  addSale(sale: Sale) {
    return this.http.post<Sale>(
      `${this.baseURL}/sales/create`,
      sale,
      this.httpOptions
    );
  }
}
