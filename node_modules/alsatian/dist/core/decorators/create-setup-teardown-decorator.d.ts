import "reflect-metadata";
export declare function createSetupTeardownDecorator(metadataDescription: string, isAsync: boolean): (target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) => void;
