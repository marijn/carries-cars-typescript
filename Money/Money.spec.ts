import {Expect, Ignore, Test} from 'alsatian';
import {EUR, USD} from "./Money";

export class MoneySpec {
    @Test()
    Money_equalTo_detects_identical_values() {
        const ninetyNineCents = EUR(90);
        const alsoNinetyNineCents = EUR(90);

        Expect(ninetyNineCents.equalTo(alsoNinetyNineCents)).toBe(true);
    }

    @Test()
    Money_equalTo_detects_difference_of_currencies() {
        const ninetyNineEuroCents = EUR(99);
        const ninetyNineDollarCents = USD(99);

        Expect(ninetyNineEuroCents.equalTo(ninetyNineDollarCents)).toBe(false);
    }

    @Test()
    @Ignore('TODO: Implement this test scenario')
    Money_equalTo_detects_difference_in_amount() {
    }
}
