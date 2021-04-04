import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { AppService } from "../app-service.service";
import { MatTableDataSource } from "@angular/material/table";
import { AppModel } from "../app.model";
import { PageEvent } from "@angular/material/paginator/typings/public-api";

@Component({
  selector: "app-table-container",
  templateUrl: "./table-container.component.html",
  styleUrls: ["./table-container.component.css"],
})
export class TableContainerComponent implements OnInit {
  currentPage = 1;
  totalData = 0;
  dataperPage = 10;

  displayedColumns: string[] = [
    "SELECT",
    "NAME",
    "LAST UPDATED",
    "COGS",
    "COST PRICE",
    "SALE PRICE",
    "GROSS MARGIN",
    "TAGS/ACTION",
  ];
  dataSource: AppModel[] = [];
  selection = new SelectionModel<AppModel>(true, []);

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData(this.currentPage).subscribe((data) => {
      this.dataSource = data.results;
      console.log(this.dataSource);
      this.totalData = data.count;
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

  //*page count
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    console.log(this.currentPage);
    this.appService.getData(this.currentPage).subscribe((data) => {
      this.dataSource = data.results;
      console.log(this.dataSource);

      this.totalData = data.count;
    });
  }
}
