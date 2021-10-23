import {Expect, Test, TestCase} from 'alsatian';
import {Duration, DurationInMinutes, pricingEngine} from "./PricingEngine";
import {EUR, Money} from "../Money/Money";

export class PricingEngineSpec {
    @Test()
    @TestCase(EUR(30), DurationInMinutes(1), EUR(30))
    @TestCase(EUR(30), DurationInMinutes(3), EUR(90))
    @TestCase(EUR(23), DurationInMinutes(12), EUR(276))
    CalculatePrice_charged_per_minute(pricePerMinute: Money, duration: Duration, totalPrice: Money) {
        const actual = pricingEngine(pricePerMinute, duration);
        const expected = totalPrice;

        Expect(actual.equalTo(expected)).toBe(true);
    }
}
