"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Words = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    word: {
        type: String,
        required: true,
        unique: true,
    },
    translate: {
        type: String,
        required: true,
    },
    knowIt: {
        type: Boolean,
        required: true,
    },
});
var Words = mongoose_1.model("Words", schema);
exports.Words = Words;
