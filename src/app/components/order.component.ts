import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  opType: string = "Buy";
  operation: string = this.opType + " BTC/SGD";

  form: FormGroup;
  today = new Date();

  constructor(private fb: FormBuilder) {
    this.today.setDate(this.today.getDate());
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      orderDate: this.fb.control('', [ Validators.required ]),
      name: this.fb.control('', [ Validators.required ]),
      phone: this.fb.control('', [ Validators.required, Validators.minLength(8), Validators.maxLength(16) ]),
      dateOfBirth: this.fb.control('', [ Validators.required ]),
      gender: this.fb.control('', [ Validators.requiredTrue ]),
      orderType: this.fb.control('', [ Validators.requiredTrue ]),
      orderUnit: this.fb.control('', [ Validators.required ]),
      cryptoPair: this.fb.control('', [ Validators.requiredTrue ])
    });
  }

  onClickBuy(): void {
    this.changeOperation("Buy");
  }

  onClickSell(): void {
    this.changeOperation("Sell");
  }

  changeOperation(newOp: string): void {
    this.opType = newOp;
    this.operation = this.opType + " BTC/SGD";
  }

}
