export interface IBudget {
  debit: number;
  credit: number;
}

export interface ICompanyUnit {
  readonly name: string;
  readonly domain: string;
  budget: IBudget;
}

export class CompanyUnit implements ICompanyUnit {
  readonly name: string;

  readonly domain: string;

  budget: IBudget;

  constructor(name: string, domain: string, budget: IBudget) {
    this.name = name;
    this.domain = domain;
    this.budget = budget;
  }
}
