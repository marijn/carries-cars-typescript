import {Expect, Ignore, Test} from 'alsatian';
import {EUR} from "./Money";

export class MoneySpec {
    @Test()
    Money_equalTo_detects_identical_values() {
        const ninetyNineCents = EUR(90);
        const alsoNinetyNineCents = EUR(90);

        Expect(ninetyNineCents.equalTo(alsoNinetyNineCents)).toBe(true);
    }

    @Test()
    @Ignore('TODO: Implement this test scenario')
    Money_equalTo_detects_difference_of_currencies() {
    }

    @Test()
    @Ignore('TODO: Implement this test scenario')
    Money_equalTo_detects_difference_in_amount() {
    }
}
