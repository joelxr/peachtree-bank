import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PanelComponent } from './panel/panel.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TransferPanelComponent } from './transfer-panel/transfer-panel.component';
import { TransactionsPanelComponent } from './transactions-panel/transactions-panel.component';
import { TransactionsFilterComponent } from './transactions-filter/transactions-filter.component';
import { TransactionsSorterComponent } from './transactions-sorter/transactions-sorter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PanelComponent,
    InputTextComponent,
    TransferPanelComponent,
    TransactionsPanelComponent,
    TransactionsFilterComponent,
    TransactionsSorterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
