"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const mongodb_1 = __importDefault(require("./mongodb"));
const mongodb = new mongodb_1.default();
let book = new book_1.default("Atomic Habits", 250, 5, 87564, "2015");
function main() {
    mongodb.check_database_connection("library");
    mongodb.insert("library", "book", book);
}
main();
