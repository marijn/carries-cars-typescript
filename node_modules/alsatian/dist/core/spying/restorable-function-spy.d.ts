import { FunctionSpy } from "../spying";
export declare class RestorableFunctionSpy extends FunctionSpy {
    private _originalFunction;
    private _functionName;
    private _target;
    constructor(target: any, functionName: string);
    restore(): void;
    andCallThrough(): void;
    andStub(): void;
    call(...args: Array<any>): any;
}
