export const Euro = "EUR";
export const UnitedStatesDollar = "USD";

export type Currencies = "EUR" | "USD";

class money implements Money{
    constructor(
        readonly amountInCents: number,
        readonly currency: Currencies
    ) {}

    equalTo(other: money): boolean {
        return other.amountInCents === this.amountInCents && other.currency === this.currency;
    }

    multiply(by: number): Money {
        return new money(this.amountInCents * by, this.currency);
    }
}

export type Money = {
    equalTo(other: Money): boolean;
    multiply(by: number): Money;
}

export function EUR(amountInCents: number): Money {
    return new money(amountInCents, Euro);
}

export function USD(amountInCents: number): Money {
    return new money(amountInCents, UnitedStatesDollar);
}
