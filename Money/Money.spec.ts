import {Expect, Ignore, Test} from 'alsatian';
import {Euro} from "./Money";

export class MoneySpec {
    /**
     * This test is only here to verify that false test results get detected properly in GitHub Actions
     */
    @Test()
    Money_Exposes_Currency_IsoCode_for_Euro() {
        Expect(Euro).toBe("EUR");
    }

    @Test()
    @Ignore('TODO: Implement this test scenario')
    Money_equalTo_detects_identical_values() {
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
