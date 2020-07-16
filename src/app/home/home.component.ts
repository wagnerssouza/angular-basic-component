import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  meuEndereco1: object;
  meuEndereco2: object;
  constructor() {
    this.meuEndereco1 = {
      rua: "Xv de novembro",
    };
    this.meuEndereco2 = {
      rua: "Rua XXX do Brasil",
    };
  }

  ngOnInit() {}

  methodHomeComponent(responseButtonComponent) {
    console.log(responseButtonComponent);
  }
}
