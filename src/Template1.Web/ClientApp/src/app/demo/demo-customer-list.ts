import { Component, OnInit } from '@angular/core';
import { BaseListView, RouterService } from 'bq-start-prime';
import { DemoCustomer } from './demo-customer';

@Component({
  selector: 'app-demo-customer-list',
  template: `
<bq-table [model]='models'
          [metaData]='metaData'
          [tableParams]='tableParams'
          (loadTableData)='onRefreshData()'
          [resizableColumns]='true'
          [loading]='isLoading'
          [showGrid]='true'
          [showStripedGrid]='true'
          [showAddButton]="showAddButton">

          <bq-table-column [field]='metaData.fields.Name'></bq-table-column>

</bq-table>
`,
  styles: []
})

export class DemoCustomerListComponent extends BaseListView<DemoCustomer> {
  constructor(protected routerSvc: RouterService) {
    super(routerSvc, {});
  }
}
