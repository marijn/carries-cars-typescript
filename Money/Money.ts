export const Euro = "";

export type Currencies = "EUR" | "USD";

class money implements Money{
    constructor(
        readonly amountInCents: number,
        readonly currency: Currencies
    ) {}

    equalTo(other: money): boolean {
        return other.amountInCents === this.amountInCents && other.currency === this.currency;
    }
}

export type Money = {
    equalTo(other: Money): boolean;
}

export function EUR(amountInCents: number): Money {
    return new money(amountInCents, "EUR");
}
