import { FileRequirer } from "./";
import { ITestFixture } from "./_interfaces";
export declare class TestLoader {
    private _fileRequirer;
    constructor(_fileRequirer: FileRequirer);
    loadTestFixture(filePath: string): Array<ITestFixture>;
    private _loadTestFixture;
}
