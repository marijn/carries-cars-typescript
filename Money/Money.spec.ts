import {Expect, Test} from 'alsatian';
import {EUR, USD} from "./Money";

export class MoneySpec {
    @Test()
    Money_equalTo_detects_identical_values() {
        const ninetyNineCents = EUR(99);
        const alsoNinetyNineCents = EUR(99);

        Expect(ninetyNineCents.equalTo(alsoNinetyNineCents)).toBe(true);
    }

    @Test()
    Money_equalTo_detects_difference_of_currencies() {
        const ninetyNineEuroCents = EUR(99);
        const ninetyNineDollarCents = USD(99);

        Expect(ninetyNineEuroCents.equalTo(ninetyNineDollarCents)).toBe(false);
    }

    @Test()
    Money_equalTo_detects_difference_in_amount() {
        const ninetyNineCents = EUR(99);
        const twelveCents = EUR(12);

        Expect(ninetyNineCents.equalTo(twelveCents)).toBe(false);
    }

    @Test()
    Money_multiply_multiplies_by_the_amount_provided() {
        const thirtyThreeCents = EUR(33);
        const ninetyNineCents = EUR(99);
        const byThree = 3;
        const multiplier = byThree;
        const baseAmount = thirtyThreeCents;

        const actual = baseAmount.multiply(multiplier);

        const expected = ninetyNineCents;
        Expect(actual.equalTo(expected)).toBe(true);
    }
}
