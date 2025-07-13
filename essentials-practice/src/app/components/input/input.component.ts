import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestmentResultsService } from "../../services/investment-results.service";

@Component({
  selector: "app-input",
  imports: [FormsModule],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.css",
})
export class InputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;
  calculateService = inject(InvestmentResultsService);

  onCalculate() {
    this.calculateService.calculateInvestmentResults(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
  }
}
