import {Money} from "../Money/Money";

export type Duration = number;
export type CalculatePrice = (pricePerMinute: Money, durationInMinutes: Duration) => Money;

export const pricingEngine: CalculatePrice = (pricePerMinute, durationInMinutes) => {
    return pricePerMinute;
}
