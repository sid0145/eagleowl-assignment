import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppModel } from "./app.model";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData(page: number) {
    return this.http.get<{ count: number; next: string; results: AppModel[] }>(
      `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=${page}`
    );
  }
}
