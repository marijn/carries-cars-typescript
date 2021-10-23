import "reflect-metadata";
export declare function AsyncTest(description?: string): (target: object, propertyKey: string, descriptor?: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>) => void;
