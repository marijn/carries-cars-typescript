import ExtendoError from "extendo-error";
export declare class InvalidArgumentNamesError extends ExtendoError {
    constructor(argumentNames: Array<string>);
    private _extractArgumentName;
}
