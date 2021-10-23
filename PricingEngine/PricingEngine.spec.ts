import {Expect, Test} from 'alsatian';
import {DurationInMinutes, pricingEngine} from "./PricingEngine";
import {EUR} from "../Money/Money";

export class PricingEngineSpec {
    @Test()
    CalculatePrice_charged_per_minute() {
        const thirtyCents = EUR(30);
        const pricePerMinute = thirtyCents
        const duration = DurationInMinutes(1)

        const actual = pricingEngine(pricePerMinute, duration);

        const expected = thirtyCents;
        Expect(actual.equalTo(expected)).toBe(true);
    }
}
