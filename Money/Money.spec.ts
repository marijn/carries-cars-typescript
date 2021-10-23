import {Expect, Test, TestCase} from 'alsatian';
import {EUR, Money, USD} from "./Money";

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
    @TestCase(EUR(33), 3, EUR(99))
    Money_multiplyAndRound_multiplies_and_rounds_by_the_amount_provided(baseAmount: Money, multiplier: number, multipliedAmount: Money) {
        const actual = baseAmount.multiplyAndRound(multiplier);
        const expected = multipliedAmount;

        Expect(actual.equalTo(expected)).toBe(true);
    }
}
