import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { InputComponent } from "./components/input/input.component";
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, InputComponent, InvestmentResultsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "essentials-practice";
}
