import { Component, OnInit } from '@angular/core';
import { BaseFormView, RouterService, ViewType } from 'bq-start-prime';
import { DemoCustomer } from './demo-customer';

@Component({
  selector: 'app-demo-customer-form',
  template: `
<bq-form>
  <bq-text-field [field]="metaData.fields.Name" [(model)]="model.Name"></bq-text-field>
</bq-form>
`,
  styles: []
})

export class DemoCustomerFormComponent extends BaseFormView<DemoCustomer> {  
  constructor(protected routerSvc: RouterService) {
    super(routerSvc, {});
  }
}
