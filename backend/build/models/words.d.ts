/// <reference types="mongoose" />
interface Word {
    word: string;
    translate: string;
    knowIt: boolean;
}
declare const Words: import("mongoose").Model<Word, any, any>;
export { Words };
