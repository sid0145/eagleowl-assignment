import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { AppService } from "../app-service.service";
import { MatTableDataSource } from "@angular/material/table";
import { AppModel } from "../app.model";

@Component({
  selector: "app-table-container",
  templateUrl: "./table-container.component.html",
  styleUrls: ["./table-container.component.css"],
})
export class TableContainerComponent implements OnInit {
  displayedColumns: string[] = [
    "SELECT",
    "NAME",
    "LAST UPDATED",
    "COGS",
    "COST PRICE",
    "SALE PRICE",
    "GROSS MARGIN",
  ];
  dataSource: AppModel[] = [];
  selection = new SelectionModel<AppModel>(true, []);

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe((data) => {
      this.dataSource = data.results;
      console.log(this.dataSource);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: AppModel): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.name + 1
    }`;
  }
}
