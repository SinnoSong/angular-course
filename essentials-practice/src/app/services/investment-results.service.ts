import { Injectable, signal } from "@angular/core";
import { type InvestmentResults } from "../components/investment-results/investment-results.model";

@Injectable({
  providedIn: "root",
})
export class InvestmentResultsService {
  resultData = signal<InvestmentResults[] | undefined>(undefined);

  calculateInvestmentResults(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ) {
    const annualData: InvestmentResults[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData.set(annualData);
  }
}
