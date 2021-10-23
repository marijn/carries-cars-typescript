import {Expect, Test} from 'alsatian';
import {pricingEngine} from "./PricingEngine";

export class PricingEngineSpec {
    /**
     * This test is only here to verify that false test results get detected properly in GitHub Actions
     */
    @Test()
    Test_Fails() {
        Expect(pricingEngine("", 1)).toBe({});
    }
}
