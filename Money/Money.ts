export const Euro = "";

export type Money = {
    equalTo(other: Money): boolean;
}

export function EUR(amountInCents: number): Money {
    return;
}
