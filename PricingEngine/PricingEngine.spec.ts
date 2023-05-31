import {Expect, Test, TestCase} from 'alsatian';
import {Duration, DurationInMinutes, pricingEngine} from "./PricingEngine";
import {EUR, Money} from "../Money/Money";

export class PricingEngineSpec {
    @Test()
    @TestCase(EUR(30), DurationInMinutes(1), EUR(30))
    @TestCase(EUR(30), DurationInMinutes(3), EUR(90))
    @TestCase(EUR(23), DurationInMinutes(12), EUR(276))
    CalculatePrice_charged_per_minute(pricePerMinute: Money, duration: Duration, totalPrice: Money) {
        // Act
        const actual = pricingEngine(pricePerMinute, duration);

        // Assert
        const expected = totalPrice;
        Expect(actual.equalTo(expected)).toBe(true);
    }

    @Test()
    CalculatePrice_charged_per_minute_including_an_extended_reservation() {
        // Arrange
        const pricePerMinute = EUR(24);
        const duration = DurationInMinutes(10);
        const totalReservationDuration = DurationInMinutes(30);
        // const totalPrice = EUR(0.24 * 10 + (30 - 20) * 0.12);
        const totalPrice = EUR(288);

        // Act
        const actual = pricingEngine(pricePerMinute, duration, totalReservationDuration);

        // Assert
        const expected = totalPrice;
        Expect(actual.equalTo(expected)).toBe(true);
    }
}
