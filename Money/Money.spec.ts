import {Expect, Test} from 'alsatian';
import {Euro} from "./Money";

export class MoneySpec {
    /**
     * This test is only here to verify that false test results get detected properly in GitHub Actions
     */
    @Test()
    Money_Exposes_Currency_IsoCode_for_Euro() {
        Expect(Euro).toBe("EUR");
    }
}
