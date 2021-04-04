import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

//*************material modules */
import {
  MatTableModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatPaginatorModule,
  MatChipsModule,
} from "@angular/material";

//************all static import */
import { HeaderComponent } from "./header/header.component";
import { TableContainerComponent } from "./table-container/table-container.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, TableContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatPaginatorModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
