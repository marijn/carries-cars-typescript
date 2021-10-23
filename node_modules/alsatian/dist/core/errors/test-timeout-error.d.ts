import { MatchError } from "./match-error";
export declare class TestTimeoutError extends MatchError {
    constructor(testTimeout: number);
}
