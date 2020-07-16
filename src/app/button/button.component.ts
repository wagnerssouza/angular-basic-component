import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() numero: number;
  @Input() cep: object;
  @Output() responseComponent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  clickButton(): void {
    this.cep["buttonComponent"] = "Passou";
    const valueResult = {
      cep: this.cep,
      numero: this.numero * 5,
      label: this.label + " -- Passou pelo component button",
    };

    this.responseComponent.emit(valueResult);
  }
}
